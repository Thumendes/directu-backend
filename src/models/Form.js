const {
  model,
  Schema
} = require("../database");

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  storeId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  questions: {
    type: [{
      _id: Schema.Types.ObjectId,
      __v: Number,
      name: {
        type: String,
        required: true,
      },
      options: {
        type: [{
          name: {
            type: String,
            required: true
          }
        }],
        required: true,
      },
      createdAt: Date,
    }],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new model("Form", FormSchema);