const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const data = req.body;

  console.log(data);

  try {
    const store = await Store.create(data);

    console.log(store);
    return res.json(store);
  } catch (error) {
    return res.status(500).send({ error, _: "Error creating store" });
  }
};
