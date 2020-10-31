const Form = require("../../models/Form");
const Answer = require("../../models/Answer");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findOne({ _id: id });
    const answers = await Answer.find({ formId: id });

    return res.json(form);
  } catch (error) {
    return res.json({ error, _: "Error listing forms" });
  }
};
