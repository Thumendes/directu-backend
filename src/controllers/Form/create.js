const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const form = await Form.create(data);
    return res.send(form);
  } catch (error) {
    return res.send({ error, _: "Error creating form" });
  }
};
