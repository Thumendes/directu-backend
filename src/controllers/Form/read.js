const Form = require("../../models/Form");
const Client = require("../../models/Client");

module.exports = async (req, res) => {
  const { storeId, clientId } = req.query;

  try {
    if (storeId) {
      return res.json(await Form.find({ storeId }));
    }
    if (clientId) {
      const formsTarget = await Form.find();
      const client = await Client.findOne({ _id: clientId });
      const clientForms = formsTarget.filter((form) => {
        return client.forms.includes(form._id) ? false : true;
      });
      return res.json(clientForms);
    }

    const forms = await Form.find();
    return res.json(forms);
  } catch (error) {
    return res.json({ error, _: "Error listing forms" });
  }
};
