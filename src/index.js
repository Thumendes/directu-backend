require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes.js");

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
