const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

async function mail({ to, subject, template }) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "directu.contato@gmail.com",
      pass: "directu123",
    },
  });

  let info = await transporter.sendMail({
    from: "directu.contato@gmail.com",
    to,
    subject,
    html: fs.readFileSync(
      path.resolve(__dirname, "..", "template", `${template}.html`),
      "utf8"
    ),
  });

  console.log(info);
}

module.exports = mail;
