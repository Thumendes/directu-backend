const Client = require("../../models/Client");

module.exports = async (req, res) => {
    const {id} = req.params
  try {
    const client = await Client.find({_id: id})
    return res.send(client)
  } catch (error) {
      return res.send({error, _:"Error listing client"})
  }
};
