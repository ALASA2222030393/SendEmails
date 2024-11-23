
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const htmlContent = require("./uniteck_email")
const mailgun = new Mailgun(formData);

const mg = mailgun.client({username: 'api', key: "c800f76b3633a4924c27449bbe03b118-6df690bb-addfe9ba"});


mg.messages.create('sandbox-123.mailgun.org', {
    from: "brad@houssamboukhetou.net",
    to: "thinkshope666@gmail.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: htmlContent
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.error(err)); // logs any error
