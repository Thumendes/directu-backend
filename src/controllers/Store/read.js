const Store = require("../../models/Store");

module.exports = async (req, res) => {
  try {
    const stores = await Store.find()
    return res.send(stores)
  } catch (error) {
      return res.send({error, _:"Error listing stores"})
  }
};
