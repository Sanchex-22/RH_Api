import { user } from '../database/usersModels.mjs'
import { compare } from '../../utils/EncryptionUtil.mjs'
import jwt from 'jsonwebtoken'

export class authController {
  // * Login
  static async login (req, res) {
    try {
      // !Iniciar Session
      const u = await user.findOne({ where: { email: req.body.email } })

      if (!u) { return res.status(404).send({ message: 'Usuario y contraseña incorrecta' }) }

      const passwordIsValid = await compare(req.body.password, u.password)

      const pass = await user.findOne({ where: { password: passwordIsValid } })
      if (pass === false) { return res.status(401).send({ message: 'Usuario y contraseña incorrecta' }) }
      const userToken = {
        id: u.id,
        username: u.username
      }
      const token = jwt.sign({ userToken }, process.env.SECRET_KEY, { expiresIn: '7d' })

      return res.status(200).send({ message: 'Bienvenido', userToken, token })
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
