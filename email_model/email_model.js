const nodemailer = require('nodemailer');
const config = require("./email");
const { google } = require('googleapis');

// Configura las credenciales de OAuth 2.0
// const OAuth2 = google.auth.OAuth2;
// // console.log(config.CLIENT_ID+"1")
// const oauth2Client = new OAuth2(
//   config.CLIENT_ID,
//   config.CLIENT_SECRET,
//   'https://developers.google.com/oauthplayground' // Redirige URI
// );

// oauth2Client.setCredentials({
//   refresh_token: config.REFRESH_TOKEN,
// });


const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    // type: 'OAuth2',
    user: config.MAIL,
    pass:config.MAIL_PASSWORD,
    // clientId: config.CLIENT_ID,
    // clientSecret: config.CLIENT_SECRET,
    // refreshToken: config.REFRESH_TOKEN, // Opcional, se puede obtener automáticamente
  },
});

module.exports = transporter;