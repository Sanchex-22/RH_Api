require('dotenv').config({path: './.env'});

/* -- Importa el controlador de autenticación  --*/
const userController = require("../controllers/userController");

module.exports = function(app) {
    /* -- Middleware para agregar encabezados de control de acceso (CORS) a las respuestas HTTP -- */
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.get(
      "/api/profile/:id",
      userController.getProfile
    );

    app.get(
      "/api/allusers",
      userController.getAllUsers
    );

    app.post(
      "/api/eliminateuser",
      userController.eliminateUser
    )
    app.put(
      "/api/edituser",
      userController.editUser
    )

}