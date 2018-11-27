// require third party modules
const nodemailer = require('nodemailer');
// const error = require('errors')

//require internal files
const config = require('../config/app').myConfig;

let transporter = null;

const createTransport = () => {
  return nodemailer.createTransport({
    host: config.smtpServer.host,
    port: config.smtpServer.port,
    auth: {
      user: config.smtpServer.userName,
      pass: config.smtpServer.passwordsss
    }
  })
};

//calling the local function to make sure the transporter is being built
transporter = createTransport();

/* Params Definition
*   options -
*     to - receiver mail address,
*      text - sender text
*   next - callback
*/
const sendMail = (options) => {
  return Promise.resolve()
    .then(function prepareMailOptions() {
      const mailOptions = {
        from: '', // sender address
        to: '', // list of receivers
        subject: '', // Subject line
        text: '', // plain text body
        html: '' // html body
      };
      return Promise.resolve(mailOptions)
    })
    .then(function sendMail(mailOptions) {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error", error)
          return Promise.resolve();
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return Promise.resolve();
      })
    })
    .then(() => {
      return Promise.resolve();
    })
}

module.exports.sendMail = sendMail;
