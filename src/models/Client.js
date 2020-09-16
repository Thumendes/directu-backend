const { Model, Schema } = require("../database");

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gander: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  stores: {
    type: [Schema.Types.ObjectId],
    required: true,
    default: [],
  },
  discounts: {
    type: [Schema.Types.ObjectId],
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new Model("Client", ClientSchema);
