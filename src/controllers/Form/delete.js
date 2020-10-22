const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedForm = await Form.findByIdAndDelete(id);
    return res.send(deletedForm);
  } catch (err) {
    return res.send({ err, _: "Error deleting Form" });
  }
};
