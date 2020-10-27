const Answer = require("../../models/Answer");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnswer = await Answer.findByIdAndDelete(id);
    return res.json(deletedAnswer);
  } catch (err) {
    return res.json({ err, _: "Error deleting Answer" });
  }
};
