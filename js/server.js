const express = require("express");
const pg = require("pg");
const app = express();
const cors = require("cors");
const path = require("path");
const db = new pg.Pool({
  connectionString: "postgres://dev:dev@localhost/hco",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../styles")));

app.get("/api/db/products", (req, res, next) => {
  const query = `
    select * from "images"
    join "products" using ("productid");
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

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../login.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
