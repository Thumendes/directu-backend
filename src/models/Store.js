const { model, Schema } = require("../database");

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  road: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  numClients: {
    type: Number,
    default: 0,
  },
  type: {
    type: Number,
    default: 0,
  },
});

module.exports = new model("Store", StoreSchema);
