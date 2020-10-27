const { model, Schema } = require("../database");

const AnswerSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  formId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  questions: [
    {
      value: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new model("Answer", AnswerSchema);
