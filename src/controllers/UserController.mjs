import { user } from '../database/usersModels.mjs'
import { encrypt } from '../../utils/EncryptionUtil.mjs'
export class userController {
  //* register user
  static async newUser (req, res) {
    console.log(req.body)
    try {
      // TODO: Registrar Usuario, agregar validaciones
      const { username, email, pass, roles } = req.body
      console.log(req.body)
      const password = await encrypt(pass)
      await user.sync()
      await user.create({
        username, email, password, roles
      })
      res.status(201).send({ message: 'Usuario registrado con éxito!' })
    } catch (error) {
      res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }

  // * Traer perfil del usuario
  static async getProfile (req, res) {
    try {
      // TODO: hacer el getPerfile
      res.status(200).send()
    } catch (error) {
      console.error('Error al traer el perfil de usuario: ', error)
      console.log(error)
      return res.status(500).send({ message: 'Error en el servidor.' })
    }
  }

  // * Traer a todos los usuarios
  static async getAllUsers (req, res) {
    try {
      // TODO: Hacer el getAllUser
      const User = await user.findAll()
      res.status(200).json(User)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  // * Elimara a un usuario
  static async deleteUser (req, res) {
    console.log(req.body.id)
    try {
      // TODO: Hacer el deleteUser
      console.log('Usuario eliminado correctamente')
      res.status(201).send({ message: 'Usuario eliminado con éxito!' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }

  // * Editar un Usuario
  static async editUser (req, res) {
    try {
      // TODO: Hacer el editUser
      res.status(200).send({ message: 'Usuario Editado con exito' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }
}
