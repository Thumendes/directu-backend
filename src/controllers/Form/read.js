const Form = require("../../models/Form");

module.exports = async (req, res) => {
  const { storeId } = req.query;

  try {
    if (storeId) {
      return res.json(await Form.find({ storeId }));
    }
    const forms = await Form.find();
    return res.json(forms);
  } catch (error) {
    return res.json({ error, _: "Error listing forms" });
  }
};
