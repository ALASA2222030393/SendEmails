const express = require("express");
const { Resend } = require("resend");
const htmlContent = require("./uniteck_email");
require('dotenv').config();

const app = express();
const resend = new Resend('re_5CVHSGzh_Q2aCTjdBZ48Pcca9sA791kJk');

app.get("/", async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: "achrafprime1212@gmail.com",
      to: "achrafprime1212@gmail.com",
      subject: "hello world",
      html: "<h1>hi it's me B</h1>"
    });

    res.status(200).json({ data });
  } catch (err) {
    res.status(500)
    console.log(err)
  }
});

app.listen(3000, () => {
  console.log("3000");
});