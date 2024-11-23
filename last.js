const express = require("express");
const nodemailer = require("nodemailer");
const htmlContent = require("./uniteck_email");
const app = express();


const transporter = nodemailer.createTransport({
  service: 'gmail', // Use service instead of host/port
  auth: {
    user: "unitechmanger@gmail.com", // Corrected 'user' key
    pass: "aknk ywif rafj owcg", // Your app password
  },
});

// const transporter = nodemailer.createTransport({
//   host: "smtp.eu.mailgun.org",
//   port: 465,
//   secure: true,
//     auth: {
//       user: "brad@houssamboukhetou.net ", // Corrected 'user' key
//       pass: "3ba2d4f024f51b7571a90d938d57b963-6df690bb-b40eb18e", // Your app password
//     },
//   });


const emails = [ 
  "Khadidjabachouche18@gmail.com", "Khadidjabachouche18@gmail.com", 
  "dorsafdorsaf074@gmail.com", "amanibenabderrahmane763@gmail.com", 
  "amanibenabderrahmane763@gmail.com", "ayatelrrahmane892@gmail.com", 
  "Kaimcharafeddine19@gmail.com", "shahrazedhamida@gmail.com", 
  "mohamedzemieche8@gmail.com", "darine.ferrouh@gmail.com", "seifmemo2005@gmail.com",
  "snaasma466@gmail.com", "snaasma466@gmail.com", "iyad98033@gmail.com", 
  "briksaluha@gmail.com", "Hadilhoudhoddoudi@gmail.com", 
  "Hadilhoudhoddoudi@gmail.com", "rahmarezaiki@gmail.com", 
  "ikhlasbekhouche8@gmail.com", "assilguernah@gmail.com", 
  "Sabaaamina137@gmail.com", "ltklinto@gmail.com"
]

app.get("/", async (req, res) => {
    try {

      
        for (const email of emails) {
          const result = await transporter.sendMail({
            from: '"unticheh" <achrafgt4@gmail.com>', // Use your actual email
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