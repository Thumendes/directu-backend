const Client = require("../../models/Client");
const Answer = require("../../models/Answer");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findOne({ _id: id });
    const answers = await Answer.find({ clientId: id });

    return res.json({ client, answers });
  } catch (error) {
    return res.json({ error, _: "Error listing client" });
  }
};
