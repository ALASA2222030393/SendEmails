const express = require("express");
const dotenv = require("dotenv");
const Mailjet = require("node-mailjet");
const htmlContent = require("./uniteck_email")
const nodemailer = require("nodemailer");

// const MAILJET_API_KEY = "0823f34e18a37976af04750b00e728f3"
// const MAILJET_API_SECRET = "2105777083be2f57485111a72c34a94b"

dotenv.config();
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "achrafgt4@gmail.com", // Your Gmail address
    pass: "zgte aubm waxv ijcx",   // Your App Password or Gmail account password
  },
});



// const mailjet = new Mailjet({
//   apiKey: MAILJET_API_KEY,
//   apiSecret: MAILJET_API_SECRET,
// });


app.post("/new_email", async (req, res) => {
  const toEmail = req.body.email;

  const mailOptions = {
    from: "achrafgt4@uniteckteam.com", // Sender's email address
    to: toEmail,                 // Recipient's email address
    subject: "subject",            // Email subject
    text: "textContent",           // Plain text content
    html: htmlContent,           // HTML content
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: "success", info });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});