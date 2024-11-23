const express = require("express");
require("dotenv").config();
const SibApiV3Sdk = require("sib-api-v3-sdk");
const htmlContent = require("./uniteck_email")
const nodemailer = require("nodemailer");


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

EMAIL_API_KEY = "bdd81596d56857ad457641ef4845c2c3-84aa7c50-a72f-46d4-ad44-04e89b87fb52"

const defaultClient = SibApiV3Sdk.ApiClient.instance;

defaultClient.authentications['api-key'].apiKey = EMAIL_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();



app.get("/test-config", (req, res) => {
    try {
        return res.json({
            status: "success",
            config: {
                hasApiKey: !!apiKey.apiKey,
                apiKeyLength: apiKey.apiKey ? apiKey.apiKey.length : 0
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
});



app.post("/new_email", async (req, res) => {
    const sender = {
        email: "achrafgt4@gmail.com",
        name: "unitech"
    };

    const receivers = [
        {
            email: req.body.email
        }
    ];

    try {
        

      await apiInstance.sendTransacEmail({
        sender,
        to: receivers,
        subject: "TEST",
        textContent: "Just a test for the API email sender",
        htmlContent: htmlContent,
    });
        return res.status(200).json(sendEmail);
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email", details: error.message });
    }
});