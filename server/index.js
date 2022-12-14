require("dotenv").config();
const express = require("express");
const pg = require("pg");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware')
const authorizationMiddleware = require('./authorization-middleware')
const path = require("path");

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());
app.use(staticMiddleware);

app.get("/api/products", (req, res, next) => {
  const query = `
    with content as (
      with data as (
        select products.*, json_agg(images.url) as images
        from products
        join images on products.product_no = images.product_no
        group by products.product_no
      )
      select data.category, to_jsonb(data.*) as data from data
    )
    select content.category, json_agg(content.data) as items
    from content
    group by content.category;
  `;
  db.query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/login', (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new ClientError(401, 'invalid login');
  }

  const sql = `
    select *
    from "users"
    where "email" = $1;
  `;

  const params = [email];

  let results;

  db.query(sql, params)
    .then(result => {
      results = result.rows[0];
      return results.hashedpassword;
    })
    .then(hashedPassword => {
      return argon2.verify(hashedPassword, password);
    })
    .then(isMatching => {
      if (!isMatching) {
        throw new ClientError(401, 'invalid login');
      } else {
        delete results.hashedpassword;
        const token = jwt.sign(results, process.env.TOKEN_SECRET);
        const responseObject = {
          token,
          payload: results
        };
        res.status(200).json(responseObject);
      }
    })
    .catch(err => next(err));
});

app.use(authorizationMiddleware);

app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {
  const { productId } = req.body
  const url = req.file.location
  const sql = `
    insert into "images" ("url", "product_no")
    values ($1, $2)
    returning *;
  `;
  const params = [url, productId];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/products', (req, res, next) => {
  const { price, description, title, link, category } = req.body;

  if (!price || !description || !title) {
    throw new ClientError(400, 'Try sending a non-falsy price, description, and title');
  }

  const sql = `
    insert into "products" (name, description, category, price, link)
    values ($1, $2, $3, $4, $5)
    returning *;
  `

  const params = [title, description, category, price, link];

  db.query(sql, params)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
})

app.delete('/api/products', (req, res, next) => {
  console.log('REQUEST BODY: ', req.body)
  const { product_no } = req.body;

  if (!product_no) {
    throw new ClientError(400, 'Missing a product number')
  }

  const sql = `
    delete from products
    where product_no = $1;
  `

  const params = [product_no];

  db.query(sql, params)
    .then(result => res.sendStatus(200))
    .catch(err => next(err));
})

app.get('/api/product/:id', (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    throw new ClientError(400, 'Send an id in the path');
  }

  const sql = `
    select products.*, json_agg(images.url) as images, json_agg(images.image_no) as image_ids
    from products
    join images on products.product_no = images.product_no
    where products.product_no = $1
    group by products.product_no
  `

  const params = [id];

  db.query(sql, params)
    .then(result => res.status(202).json(result.rows[0]))
    .catch(err => next(err))
})

app.delete('/api/image/:id', (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    throw new ClientError(400, 'Send an id in the path');
  }

  const sql = `
    delete from images
    where image_no = $1
  `

  const params = [id];

  db.query(sql, params)
    .then(result => res.sendStatus(200))
    .catch(err => next(err))
})

app.put('/api/product/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, link } = req.body;

  if (!id) {
    throw new ClientError(400, 'Send an id in the path');
  }

  const sql = `
    update products
    set name = $1, description = $2, price = $3, link = $4
    where product_no = $5
    returning *;
  `

  const params = [name, description, price, link, id];

  db.query(sql, params)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
})

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
