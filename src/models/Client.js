const { model, Schema } = require("../database");

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wallet: {
    type: Number,
    default: 0,
  },
  cpf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  stores: {
    type: [Schema.Types.ObjectId],
    required: true,
    default: [],
  },
  forms: {
    type: [Schema.Types.ObjectId],
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new model("Client", ClientSchema);
