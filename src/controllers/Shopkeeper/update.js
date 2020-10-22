const Shopkeeper = require("../../models/Shopkeeper");

module.exports = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const updateShopkeeper = await Shopkeeper.findByIdAndUpdate({_id: id}, data);
    return res.send(updateShopkeeper)
  } catch (err) {
      return res.send({err, _:"Error updating shopkeeper"})
  }

};
