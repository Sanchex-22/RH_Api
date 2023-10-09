require('dotenv').config({path: '../../.env'}); // Cargar las variables de entorno desde el archivo .env

module.exports = {
  MAIL: process.env.MAIL, 
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  TOKEN: process.env.TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  ACCESS: process.env.ACCESS,
};