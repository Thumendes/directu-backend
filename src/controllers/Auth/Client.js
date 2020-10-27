const Client = require("../../models/Client");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await Client.findOne({ email });

    if (!client) {
      return res.json({ error: "Usuário não encontrado" });
    }

    if (client.password !== password) {
      return res.json({ error: "Senha incorreta" });
    }

    return res.json({ token: client._id });
  } catch (error) {
    return res.status(400).json({});
  }
};
