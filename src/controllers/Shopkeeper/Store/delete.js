const Shopkeeper = require("../../models/Shopkeeper");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedShopkeeper = await Shopkeeper.findbyIdandDelete(id);
    return res.send(deletedShopkeeper)
  } catch (err) {
      return res.send({err, _:"Error deleting shopkeeper"})
  }
};
