require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes.js");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);
app.use("/public", express.static(path.resolve(__dirname, "..", "public")));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
