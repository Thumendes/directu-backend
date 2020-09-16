const Client = require("../../models/Client");

module.exports = async (req, res) => {
  try {
    const clients = await Client.find()
    return res.send(clients)
  } catch (error) {
      return res.send({error, _:"Error listing clients"})
  }
};
