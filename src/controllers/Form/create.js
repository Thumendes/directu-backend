const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const newForm = await Form.create(data);

    return res.json(newForm);
  } catch (err) {
    return res.json({ err: err.message });
  }
};
