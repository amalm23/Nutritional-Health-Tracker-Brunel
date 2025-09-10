const nodemailer = require('nodemailer');
var emails = [];
var subject = '';
var text = '';

for(let i = 0; i < emails.size(); i ++){
    sendEmail(emails[1], subject, text);
}



async function sendEmail(to, subject, text) {
  // Creating a transporter object
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 993,
    secure: false,
    auth: {
      user: 'username',//our email adress
      pass: 'password'//our email password
    }
  });

  // Defining the email details
  let mailOptions = {
    from: 'sender@example.com',//change this value on production
    to: to,
    subject: subject,
    text: text
  };

  // Sending the email
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
}