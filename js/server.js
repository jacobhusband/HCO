const express = require("express");
const pg = require("pg");
const pool = new Pool();
const app = express();
const cors = require("cors");
const path = require("path");

const db = new pg.Pool({
  connectionString: "postgres://dev:dev@localhost/studentGradeTable",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../styles")));

app.get("/api/db", (req, res, next) => {
  res.status(200);
  res.json({ id: req.params.id });
  next();
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../login.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
