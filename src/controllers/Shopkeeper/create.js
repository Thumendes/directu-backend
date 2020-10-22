const Shopkeeper = require("../../models/Shopkeeper");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const newShopkeeper = await Shopkeeper.create(data);

    return res.json(newShopkeeper);
  } catch (error) {
    return res.status(500).send({ error, _: "Error creating store" });
  }
};
