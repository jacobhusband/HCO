const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.get("/api/:id", (req, res, next) => {
  console.log(req.params.id);
  res.status(200);
  res.json({ id: req.params.id });
  next();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
