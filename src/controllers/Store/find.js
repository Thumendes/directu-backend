const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const store = await Store.findOne({ _id: id });
    return res.json(store);
  } catch (error) {
    return res.json({ error, _: "Error listing stores" });
  }
};
