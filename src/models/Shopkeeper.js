const { model, Schema } = require("../database");

const ShopkeeperSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  storeId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  password: {
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
});

module.exports = new model("Shopkeeper", ShopkeeperSchema);
