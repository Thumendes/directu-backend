const Form = require("../../models/Form");

module.exports = async (req, res) => {
  try {
    const forms = await Form.find()
    return res.send(forms)
  } catch (error) {
      return res.send({error, _:"Error listing forms"})
  }
};
