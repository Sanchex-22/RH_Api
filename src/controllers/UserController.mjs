/* eslint-disable camelcase */
import { user } from '../database/usersModels.mjs'
import { persons } from '../database/personsModels.mjs'
import { encrypt } from '../../utils/EncryptionUtil.mjs'
import { employee } from '../database/employeeModels.mjs'
import { companies } from '../database/companiesModels.mjs'
import { department } from '../database/departmentModels.mjs'

export class userController {
  //* register user
  static async newUser (req, res) {
    try {
      // const namePattern = /^[A-Za-z\s]+$/
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/
      // const cedulaPattern = /^\d{1,2}-\d{3,4}-\d{3,4}$/
      // TODO: Registrar Usuario, agregar validaciones
      // eslint-disable-next-line camelcase
      let { username, email, pass, roles, status, identification, name, last_name, nationality, company_id, department_id } = req.body
      username = username.trim()
      email = email.trim()
      let password = pass.trim()
      roles = roles === '' ? 'user' : roles

      if (!passwordPattern.test(password)) {
        return res.status(404).send({ message: 'La contraseña debe contener al menos 8 caracteres, 1 letra mayúscula y 1 número.' })
      }

      if (!email.endsWith('@gmail.com') && !email.endsWith('@intermaritime.org')) {
        return res.status(404).send({ message: 'El correo electrónico debe tener una terminación en "@gmail.com o @intermaritime.org"".' })
      }

      const existingUser = await user.findOne({ where: { username } })
      if (existingUser) { return res.status(400).send({ message: 'Ya existe un usuario con este nombre de usuario.' }) }

      const existingUserEmail = await user.findOne({ where: { email } })
      if (existingUserEmail) { return res.status(400).send({ message: 'Ya existe un usuario con este correo electrónico.' }) }

      const existingCompany = await companies.findOne({ where: { id: company_id } })
      if (!existingCompany) { return res.status(400).send({ message: 'La compañia seleccionada no existe' }) }

      const existingDept = await department.findOne({ where: { id: department_id } })
      if (!existingDept) { return res.status(400).send({ message: 'El departamento seleccionado No Existe' }) }

      password = await encrypt(pass)
      const users = await user.create({
        username, email, password, roles, status
      })

      await persons.create({
        user_id: users.id,
        identification,
        name,
        last_name,
        nationality
      })

      await employee.create({
        user_id: users.id,
        company_id,
        department_id
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
      console.log(req.query.id)
      const User = await user.findOne({ where: { id: req.query.id } })
      if (!User) { return res.status(404).send({ message: 'Perfil no encontrado' }) }

      res.status(200).send({ id: User.id, name: User.username, rol: User.roles })
    } catch (error) {
      return res.status(500).send({ message: 'Error en el servidor.' })
    }
  }

  // * Traer a todos los usuarios
  static async getAllUsers (req, res) {
    try {
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
      const u = await user.findByPk(req.body.id)
      if (!u) { return res.status(404).send({ message: 'Usuario no encontrado o no existe' }) }
      // eliminacion en cascada
      await Promise.all([
        employee.destroy({ where: { id: u.id } }),
        persons.destroy({ where: { id: u.id } }),
        u.destroy()
      ])
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
