const transporter = require("../email_model/email_model");
const config = require("../email_model/email");
// const twilio = require('twilio')
const nodemailer = require('nodemailer');
const verificationCodes = {};

exports.email = async (req, res) => {
  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(req.body.email + "<-")
    verificationCodes[req.body.email] = {
      code,
      expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutos en milisegundos
    };

    const mailOptions = {
      from: config.MAIL,
      to: req.body.email,
      subject: "Soporte Tecnico de IT (Codigo de Verificacion)",
      text: `Tu código de verificación es: ${code}, este codigo expirara en 5 min`,
    };

    // Utiliza una promesa para manejar el envío del correo de manera asincrónica
    const sendMailPromise = new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo:", error);
          reject(error);
        } else {
          console.log("Correo enviado:", info.response);
          resolve(info.response);
        }
      });
    });

    // Espera a que se resuelva la promesa antes de responder al cliente
    await sendMailPromise;

    return res.status(200).send({ message: `Codigo enviado con éxito a su correo ${req.body.email}` });
  } catch (error) {
    console.error("Error en el bloque catch:", error);
    return res.status(500).send({ message: "Error interno del servidor", error });
  }
};

exports.verifyCode = async (req, res) => {
  try{
    const email = req.body.email;
    const userCode = req.body.code;
    console.log(email,userCode)
    console.log(verificationCodes[email])
    
    // Verifica si el correo tiene un código de verificación almacenado
    if (verificationCodes[email]) {
      const { code, expiresAt } = verificationCodes[email];
      
      // Verifica si el código coincide y si no ha expirado
      if (userCode === code && Date.now() <= expiresAt) {
        return res.status(200).send({ message: "Código válido" });
      }
    }
    
    return res.status(400).send({ message: "Código inválido o ha expirado" });
  }catch (error) {
  console.error("Error en el bloque catch:", error);
  return res.status(500).send({ message: "Error interno del servidor", error });
  }
};