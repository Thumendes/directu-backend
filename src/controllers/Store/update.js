const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const updatedStore = await Store.findbyIdandUpdate(id, data);
    return res.send(updatedStore)
  } catch (err) {
      return res.send({err, _:"Error updating store"})
  }

};
