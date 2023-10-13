/* -- Importa el controlador de autenticación  -- */
const authController = require("../../controllers/auth_controller")
const verifyController = require("../../controllers/verifyController")

module.exports = function (app) {
  /* -- Middleware para agregar encabezados de control de acceso (CORS) a las respuestas HTTP -- */
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    )
    next()
  })

  app.post(
    '/api/login', // Ruta POST para el inicio de sesión de usuarios
    authController.login // Controlador para el inicio de sesión de usuarios
  )

  app.post(
    "/api/logout",  // Ruta POST para el cierre de sesión de usuarios
    authController.logout
  ) // Controlador para el cierre de sesión de usuarios      );

  app.post(
    "/api/register",
    authController.register
  )
  app.post(
    "/api/email",
    verifyController.email
  )
  app.post(
    "/api/verifycode",
    verifyController.verifyCode
  )
  // app.post(
  //   "/api/sms",
  //   verifyController.sms
  // )   
}