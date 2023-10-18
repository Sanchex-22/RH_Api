import { user } from '../database/usersModels.mjs'

export class userController {
  //* register user
  static async newUser (req, res) {
    try {
      // !Registrar Usuario
      await user.sync()
      const createUser = await user.create({
        username: 'Abi',
        email: 'Abi@gmail.com',
        password: 'xxxxxxxxxx',
        roles: 'admin'
      })
      console.log(createUser)
      res.status(201).send({ message: 'Usuario registrado con éxito!' })
    } catch (error) {
      res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }

  // * Traer perfil del usuario
  static async getProfile (req, res) {
    try {
      // !hacer el getPerfile
      res.status(200).send()
    } catch (error) {
      console.error('Error al traer el perfil de usuario: ', error)
      return res.status(500).send({ message: 'Error en el servidor.' })
    }
  }

  // * Traer a todos los usuarios
  static async getAllUsers (req, res) {
    try {
      // !Hacer el getAllUser
      res.status(200).send()
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  // * Elimara a un usuario
  static async deleteUser (req, res) {
    console.log(req.body.id)
    try {
      // !Hacer el deleteUser
      console.log('Usuario eliminado correctamente')
      res.status(201).send({ message: 'Usuario eliminado con éxito!' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }

  // * Editar un Usuario
  static async editUser (req, res) {
    try {
      // !Hacer el editUser
      res.status(200).send({ message: 'Usuario Editado con exito' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }
}
