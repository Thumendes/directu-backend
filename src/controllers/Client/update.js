const Client = require("../../models/Client");

module.exports = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const updatedClient = await Client.findbyIdandUpdate(id, data);
    return res.send(updatedClient)
  } catch (err) {
      return res.send({err, _:"Error updating Client"})
  }

};
