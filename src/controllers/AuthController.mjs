import { user } from '../database/usersModels.mjs'
import { compare } from '../../utils/EncryptionUtil.mjs'
import jwt from 'jsonwebtoken'

export class authController {
  static async login (req, res) {
    try {
      const u = await user.findOne({ where: { email: req.body.email } })

      if (!u) {
        return res.status(404).send({ message: 'Usuario y contraseña incorrecta' })
      }
      const passwordIsValid = await compare(req.body.password, u.password)
      if (!passwordIsValid) {
        return res.status(401).send({ message: 'Usuario y contraseña incorrecta' })
      }

      const userToken = {
        id: u.id,
        username: u.username,
        roles: u.roles
      }
      const token = jwt.sign({ userToken }, process.env.SECRET_KEY, { expiresIn: '30d' })

      return res.status(200).send({ message: 'Bienvenido', userToken, token })
    } catch (error) {
      return res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }

  static async logout (req, res) {
    try {
      return res.status(200).send({
        message: 'You ve been signed out!'
      })
    } catch (err) {
      this.next(err)
    }
  }
}
