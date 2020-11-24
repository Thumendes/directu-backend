const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const data = req.body;
  console.log(req.file);

  try {
    const stores = await Store.find({ cnpj: data.cnpj });

    if (stores.length) {
      return res.json({ error: "Já existe" });
    }

    console.log(data);

    // const store = await Store.create(data);

    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, _: "Error creating store" });
  }
};
