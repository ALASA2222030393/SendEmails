const express = require("express");
const nodemailer = require("nodemailer");
const htmlContent = require("./formula");
const app = express();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "YOUR_GOOGLE_EMAIL", 
    pass: "YOUR_APP_PASSWORD", 
  },
});


const emails = ["belhadjcharafeddine8@gmail.com"];


app.get("/", async (req, res) => {
    try {

      
        for (const email of emails) {
          const result = await transporter.sendMail({
            from: '"unticheh" <achrafgt4@gmail.com>',
            to: email,
            subject: "Welcome to the workshop",
            text: "23-nov-2024",
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