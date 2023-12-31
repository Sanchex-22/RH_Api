import 'dotenv/config'

export const emailConfig = {
  MAIL: process.env.MAIL,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  TOKEN: process.env.TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  ACCESS: process.env.ACCESS
}
