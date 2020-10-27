const { model, Schema } = require("../database");

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  storeId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  questions: [
    {
      name: String,
      options: [
        {
          name: String,
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new model("Form", FormSchema);
