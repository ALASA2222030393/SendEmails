const express = require("express");
const nodemailer = require("nodemailer");
const htmlContent = require("./uniteck_email");
const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use service instead of host/port
  auth: {
    user: "achrafgt4@gmail.com", // Corrected 'user' key
    pass: "dmfp niix jisa hyfx", // Your app password
  },
});

const emails = [
  "belhadjcharafeddine8@gmail.com",
  "primeachraf007@gmail.com",
  "achrafgt4@gmail.com"
];

app.get("/", async (req, res) => {
    try {
        for (const email of emails) {
          const result = await transporter.sendMail({
            from: '"unticheh" <achrafgt4@gmail.com>', // Use your actual email
            to: email,
            subject: "Hello ✔",
            text: "Hello world?",
            html: htmlContent,
          });
          console.log(`Message sent to ${email}: %s`, result.messageId);
        }
        res.send("Emails sent successfully");
    } catch (error) {
        console.error("Error sending emails:", error);
        res.status(500).send(`Error sending emails: ${error.message}`);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});