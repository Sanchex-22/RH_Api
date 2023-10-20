// import { user } from '../database/usersModels.mjs'
import bcrypt from 'bcryptjs'
const db = require('../database/dbConnect.mjs')
const user = db.user
export class authController {
  // * Login
  static async login (req, res) {
    try {
      // !Iniciar Session
      const u = await user.findOne({
        where: {
          email: req.body.email
        }
      })
      if (!u) { return res.status(404).send({ message: 'Usuario y contraseña incorrectos' }) }
      const passwordIsValid = bcrypt.compareSync(req.body.password, u.password)

      if (!passwordIsValid) { return res.status(401).send({ message: 'Usuario y contraseña incorrectos' }) }

      // Aqui se genera el token

      return res.status(200).send({
        id: u.id,
        name: u.name,
        email: u.email,
        roles: u.roles
      })
    } catch (error) {
      return res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }
  // * logout

  static async logout (req, res) {
    try {
      // !Cerrar session: req.session = null
      return res.status(200).send({
        message: 'You ve been signed out!'
      })
    } catch (err) {
      this.next(err)
    }
  }
}
