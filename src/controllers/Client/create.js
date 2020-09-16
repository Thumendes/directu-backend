const Client = require("../../models/Client");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const client = await Client.create(data);
    return res.send(client);
  } catch (error) {
    return res.send({ error, _: "Error creating client" });
  }
};
