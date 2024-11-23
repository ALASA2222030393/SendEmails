
const nodemailer = require("nodemailer");
const htmlContent = require("./uniteck_email");


// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "achrafgt4@gmail.com", // Your Gmail address
//       pass: "vzfu moha pmbd qdwx",   // Your App Password or Gmail account password
//     },
//   });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "achrafgt4@gmail.com",
    pass: "dmfp niix jisa hyfx",
  },
});


// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 465,
//   secure: true, // true for port 465, false for other ports
//   auth: {
//     user: "8057fc001@smtp-brevo.com",
//     pass: "YKhL6mDG8FBvWbRn",
//   },
// });
var i=0;
var done = false;
var emails = ["belhadjcharafeddine8@gmail.com","primeachraf007@gmail.com","achrafgt4@gmail.com" , 0]

while(!done){
  const email = emails[i]
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"unticheh" <achrafgt4@8388345.brevosend.com>', // sender address
      to: email, 
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html:htmlContent,
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  main().catch(console.error);

  if(emails[i] == 0){
    done = true;
  }else{
    i++
  }
}




//   key : 0823f34e18a37976af04750b00e728f3
// sKey : 2105777083be2f57485111a72c34a94b