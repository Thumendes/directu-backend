const mail = require("../../services/Email");
const path = require("path");

module.exports = async (req, res) => {
  const { name, email, description } = req.body;

  mail({
    to: email,
    subject: "Cadastro Directu",
    template: "singuppro",
  });

  return res.status(200).json({ email });
};
