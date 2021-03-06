const Store = require("../../models/Store");

module.exports = async (req, res) => {
  try {
    const stores = await Store.find();
    return res.json(stores);
  } catch (error) {
    return res.json({ error, _: "Error listing stores" });
  }
};
