import { verify } from 'jsonwebtoken'
import { secret } from '../config/auth.config.js'
import { user } from '../models'
// todo: hacer esto
verifyToken = (req, res, next) => {
  const token = req.session.token
  console.log(token + 'aqui')
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }

  verify(
    token,
    secret,
    (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized!'
        })
      }
      req.userId = decoded.id // Almacena el ID de usuario decodificado en la solicitud
      next()
    }
  )
}

/* -- Objeto que contiene los middlewares relacionados con la autenticación y autorización JWT -- */
const authJwt = {
  verifyToken,
}

/* -- Exporta el objeto authJwt como un módulo -- */
export default authJwt
