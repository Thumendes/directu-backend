const Answer = require("../../models/Answer");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const answer = await Answer.findOne({ _id: id });
    return res.json(answer);
  } catch (error) {
    return res.json({ error, _: "Error listing answer" });
  }
};
