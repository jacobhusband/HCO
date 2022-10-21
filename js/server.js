const express = require("express");
const pg = require("pg");
const app = express();
// const cors = require("cors");
const path = require("path");
const db = new pg.Pool({
  connectionString: "postgres://dev:dev@localhost/hco",
  ssl: {
    rejectUnauthorized: false,
  },
});

// app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../styles")));
app.use(express.static(path.join(__dirname, "../images")));

app.get("/api/products", (req, res, next) => {
  const query = `
    select products.name, products.description, products.price, products.date as date, json_agg(images.url) as url, min(products.category) as category
    from products
    join images on products.product_no = images.product_no
    group by products.name, products.date, products.description, products.price;
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

app.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../login.html"));
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
