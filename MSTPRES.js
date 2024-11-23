
const nodemailer = require("nodemailer");
const htmlContent = require("./uniteck_email");


const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "resend",
    pass: "re_5CVHSGzh_Q2aCTjdBZ48Pcca9sA791kJk",
  },
});



async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'onboarding@resend.dev', // sender address
      to: "achrafgt4@gmail.com", 
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html:htmlContent,
    });
  
    console.log("Message sent: %s", info.messageId);

  }

  main().catch(console.error);
