const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStore = await Store.findByIdAndDelete(id);
    return res.send(deletedStore)
  } catch (err) {
      return res.send({err, _:"Error deleting store"})
  }
};
