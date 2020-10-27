const Store = require("../../models/Store");

module.exports = async (req, res) => {
  const { cnpj, password } = req.body;
  try {
    const store = await Store.findOne({ cnpj });

    if (!store) {
      return res.json({ error: "Loja não encontrada" });
    }

    if (store.password !== password) {
      return res.json({ error: "Senha incorreta" });
    }

    return res.json({ token: store._id });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
