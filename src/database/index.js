const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
