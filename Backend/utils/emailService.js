const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "luxurystayhospitality@gmail.com",
    pass: process.env.EMAIL_PASS || "password",
  },
});

async function sendInvoiceEmail(to, subject, text, attachmentPath, attachmentName) {
  const mailOptions = {
    from: process.env.EMAIL_USER || "luxurystayhospitality@gmail.com",
    to,
    subject,
    text,
    attachments: [
      {
        filename: attachmentName,
        path: attachmentPath,
      },
    ],
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendInvoiceEmail };
