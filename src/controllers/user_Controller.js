const db = require('../models/database_models')
const Persons = db.persons
const User = db.user
// import { user } from '../models/database_models'

export class UserController {
  // traer perfil del usuario
  static async getProfile (req, res) {
    try {
      console.log(req)
      userId = req.params.id

      const user = await User.findByPk(userId, {
        where: {
          id: userId
        },
        include: {
          model: Persons,
          attributes: ['id', 'name', 'last_name', 'second_name', 'second_lastname', 'nacionality', 'identification']
        }
      }
      )

      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado.' })
      }

      const userProfile = {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: user.roles,
        ...user.person.dataValues
      }
      res.status(200).send(userProfile)
    } catch (error) {
      console.error('Error al traer el perfil de usuario:', error)
      return res.status(500).send({ message: 'Error en el servidor.' })
    }
  }

  // treaer a todos los usuarios
  static async getAllUsers (req, res) {
    try {
      const allUsers = await User.findAll({
        attributes: ['id', 'username', 'email'],
        include: {
          model: Persons,
          attributes: ['id', 'name', 'last_name', 'second_name', 'second_lastname', 'nacionality', 'identification']
        }
      })

      if (!allUsers) {
        return res.status(404).send({ message: 'usuarios no encontrados.' })
      }
      console.log(allUsers)
      const usersInformation = allUsers.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.person ? user.person.name : 'N/A',
        last_name: user.person ? user.person.last_name : 'N/A',
        second_name: user.person ? user.person.second_name : 'N/A',
        second_lastname: user.person ? user.person.second_lastname : 'N/A',
        nacionality: user.person ? user.person.nacionality : 'N/A',
        identification: user.person ? user.person.identification : 'N/A'
      }))
      res.status(200).send(usersInformation)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async eliminateUser (req, res) {
    console.log(req.body.id)
    try {
      const userId = req.body.id
      const u = await User.findByPk(userId)
      console.log(u)
      if (!u) {
        console.log('Usuario no encontrado')
        res.status(404).send({ message: 'Usuario no encrontrado' })
        return
      }

      // Busca la entrada en la tabla Person correspondiente al usuario
      const persona = await Persons.findOne({ where: { user_id: userId } })

      if (persona) {
        // Si se encuentra una persona, elimínala
        await persona.destroy()
      }

      // Elimina el usuario
      await u.destroy()

      console.log('Usuario eliminado correctamente')
      res.status(201).send({ message: 'Usuario eliminado con éxito!' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }

  static async editUser (req, res) {
    try {
      let { id } = req.params.id
      const { } = req.body

      const updUser = await User.findByPk({ id })

      if (!updUser) {
        return res.status(404).send({ message: 'Este usuario no existe' })
      }
      // aca van los datos que se editan
      // ejemplo updUser.name= name ||updUser.name
      await updUser.save()

      res.status(200).send({ message: 'Usuario Editado con exito' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }
}
