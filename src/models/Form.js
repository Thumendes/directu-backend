const { model, Schema } = require("../database");

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  storeID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  questions: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new model("Form", FormSchema);
