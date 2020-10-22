const Client = require("../../models/Client");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClient = await Client.findByIdAndDelete(id);
    return res.send(deletedClient);
  } catch (err) {
    return res.send({ err, _: "Error deleting Client" });
  }
};
