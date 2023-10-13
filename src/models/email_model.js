import nodemailer from 'nodemailer'
import { emailconfig } from '../../config/email_config'

const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: emailconfig.MAIL,
    pass: emailconfig.MAIL_PASSWORD
  }
})

export default transporter
