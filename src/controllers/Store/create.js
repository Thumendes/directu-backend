const { format } = require("morgan");
const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const data = req.body;
  const file = req.file;

  try {
    const stores = await Store.find({ cnpj: data.cnpj });

    if (stores.length) {
      return res.json({ error: "Já existe" });
    }

    const storeData = {
      ...data,
      imageURL: `https://directu-backend.heroku.com/public/${file.filename}`,
    };

    const store = await Store.create(storeData);

    return res.json(store);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, _: "Error creating store" });
  }
};
