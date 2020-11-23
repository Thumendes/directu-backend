const nodemailer = require("nodemailer");

async function main(to, subject, text) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: 'directu.contato@gmail.com',
      pass: 'directu123', 
    },
  });

  let info = await transporter.sendMail({
    from: 'directu.contato@gmail.com',
    to, 
    subject,
    text,
    html: "<b>Hello world?</b>", // html body
  });
}

module.exports = main
