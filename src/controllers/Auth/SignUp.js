const mail = require("../../services/Email");
const path = require("path");

module.exports = async (req, res) => {
  const { name, email, description } = req.body;

  mail({
    to: email,
    subject: "Cadastro Directu",
    path: path.resolve(__dirname, "..", "..", "template", "signup.html"),
  });

  return res.status(200).json({ email });
};
