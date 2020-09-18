const Shopkeeper = require("../../models/Shopkeeper");

module.exports = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const updatedShopkeeper = await Store.findbyIdandUpdate(id, data);
    return res.send(updatedShopkeeper)
  } catch (err) {
      return res.send({err, _:"Error updating shopkeeper"})
  }

};
