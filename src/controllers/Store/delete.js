const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStore = await Store.findByIdAndDelete(id);
    return res.json(deletedStore);
  } catch (err) {
    return res.json({ err, _: "Error deleting store" });
  }
};
