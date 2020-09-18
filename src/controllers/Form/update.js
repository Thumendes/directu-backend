const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const updatedForm = await Form.findbyIdandUpdate(id, data);
    return res.send(updatedForm);
  } catch (err) {
    return res.send({ err, _: "Error updating form" });
  }
};
