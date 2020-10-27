const Answer = require("../../models/Answer");

module.exports = async (req, res) => {
  try {
    const answers = await Answer.find();
    return res.json(answers);
  } catch (error) {
    return res.json({ error, _: "Error listing answers" });
  }
};
