const Answer = require("../../models/Answer");
const Client = require("../../models/Client");
const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const client = await Client.findOne({ _id: data.clientId });
    const form = await Form.findOne({ _id: data.formId });

    if (client.forms.includes(data.formId)) {
      return res.json({ error: "Já respondeu formulário" });
    }

    await Client.findOneAndUpdate(
      { _id: data.clientId },
      {
        forms: [...client.forms, data.formId],
        wallet: client.wallet + form.discount,
      }
    );

    const answer = await Answer.create(data);

    return res.json(answer);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, _: "Error creating answer" });
  }
};
