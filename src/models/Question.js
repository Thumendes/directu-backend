const { Model, Schema } = require("../database");

const QuestionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new Model("Question", QuestionSchema);
