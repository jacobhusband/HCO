require("dotenv").config();
const express = require("express");
const pg = require("pg");
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const path = require("path");

const db = new pg.Pool({
  connectionString: "postgres://dev:dev@localhost/hco",
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());
app.use(staticMiddleware);

app.get("/api/products", (req, res, next) => {
  const query = `
    select products.name, products.description, products.price, products.date as date, json_agg(images.url) as url, min(products.category) as category, products.product_no as id
    from products
    join images on products.product_no = images.product_no
    group by products.name, products.date, products.description, products.price, products.product_no;
  `;
  db.query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred`,
      });
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
