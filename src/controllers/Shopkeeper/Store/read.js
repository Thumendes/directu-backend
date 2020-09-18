const Shopkeeper = require("../../models/Shopkeeper");

module.exports = async (req, res) => {
  try {
    const shopkeepers = await Shopkeeper.find()
    return res.send(shopkeepers)
  } catch (error) {
      return res.send({error, _:"Error listing shopkeeper"})
  }
};
