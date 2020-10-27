const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findOne({ _id: id });
    return res.send(form);
  } catch (error) {
    return res.send({ error, _: "Error listing forms" });
  }
};
