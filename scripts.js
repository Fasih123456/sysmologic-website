const nodemailer = require("nodemailer");

// Replace with your own SMTP configuration
const transport = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  auth: {
    user: "your-username",
    pass: "your-password",
  },
});

// Extract the form data
const name = req.body.name;
const email = req.body.email;
const message = req.body.message;

// Construct the email
const mailOptions = {
  from: `"${name}" <${email}>`,
  to: "business@example.com",
  subject: "New contact form submission",
  text: message,
};

// Send the email
transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Message sent: ${info.messageId}`);
  }
});
