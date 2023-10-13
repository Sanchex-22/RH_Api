const nodemailer = require('nodemailer')
const config = require("./email")
const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: config.MAIL,
    pass:config.MAIL_PASSWORD
  }
})

module.exports = transporter