const Answer = require("../../models/Answer");
const Client = require("../../models/Client");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const client = await Client.findOne({ _id: data.clientId });

    if (client.forms.includes(data.formId)) {
      return res.json({ error: "Já respondeu formulário" });
    }

    client.forms.push(data.formId);

    await Client.findOneAndUpdate(
      { _id: data.clientId },
      { forms: [...client.forms, data.formId] }
    );

    const answer = await Answer.create(data);

    return res.json(answer);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, _: "Error creating answer" });
  }
};
