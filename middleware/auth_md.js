const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.session.token;
    console.log(token+"aqui")
    if (!token) {
      return res.status(403).send({
        message: "No token provided!",
      });
    }
  
    jwt.verify(
      token, 
      config.secret, 
      (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!"
          });
        }
        req.userId = decoded.id; // Almacena el ID de usuario decodificado en la solicitud
        next();
      }
    );
};

  
/* -- Objeto que contiene los middlewares relacionados con la autenticación y autorización JWT -- */
const authJwt = {
    verifyToken,
};
  
  
  /* -- Exporta el objeto authJwt como un módulo -- */
module.exports = authJwt;