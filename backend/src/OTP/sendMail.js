"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'rahulyadav@dietms.org',
    pass: 'Dream11@'
  }
});

const otp = generateOTP();
// async..await is not allowed in global scope, must use a wrapper
export default async function SendOtp() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    
    from: '"DIEMS" <rahulyadav@dietms.org>', // sender address
    to: email, // list of receivers
    subject: "OTP verification for alumini", // Subject line
    text: `Your OTP is : ${otp}`, // plain text body
    html: "<b>Donot share your OTP with anyone</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

