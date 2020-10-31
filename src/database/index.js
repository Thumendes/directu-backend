const mongoose = require("mongoose");

const development = true;

mongoose.connect(
  development ? "mongodb://localhost/directu" : process.env.MONGODB_URI,
  { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
