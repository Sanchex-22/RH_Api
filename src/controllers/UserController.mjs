/* eslint-disable camelcase */
import { user } from '../database/usersModels.mjs'
import { persons } from '../database/personsModels.mjs'
import { encrypt } from '../../utils/EncryptionUtil.mjs'
import { companies } from '../database/companiesModels.mjs'
import { department } from '../database/departmentModels.mjs'
import sequelize from '../database/dbConnect.mjs'
import { contract } from '../database/contractModels.mjs'
import { vacations } from '../database/vacationsModels.mjs'

export class userController {
  //* register user
  static async newUser (req, res) {
    const transaction = await sequelize.transaction()
    try {
      const normalizeRole = (role) => {
        return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()
      }
      // const namePattern = /^[A-Za-z\s]+$/
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/
      // const cedulaPattern = /^\d{1,2}-\d{3,4}-\d{3,4}$/
      // TODO: Registrar Usuario, agregar validaciones
      // eslint-disable-next-line camelcase
      let { username, email, pass, roles, status, identification, name, last_name, nationality, company_id, department_id, contract_id, contractype_id, postion_id, type_id, position_id, salary, start_date, end_date } = req.body
      username = username.trim()
      email = email.trim()
      let password = pass.trim()
      roles = roles === '' ? 'User' : roles
      roles = normalizeRole(roles)

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
      }, { transaction })

      await persons.create({
        user_id: users.id,
        identification,
        name,
        last_name,
        nationality
      }, { transaction })

      const c = await contract.create({
        user_id: users.id,
        type_id,
        position_id,
        company_id,
        department_id,
        contractype_id,
        postion_id,
        salary,
        start_date,
        end_date
      }, { transaction })

      const v = await vacations.create({
        user_id: users.id,
        accumulated_vacations: '0',
        aproved_forms: '0',
        rejected_forms: '0',
        status: '0'
      }, { transaction })

      if (!c) { return res.status(404).send({ message: 'No trajo nada' }) }
      await transaction.commit()
      res.status(201).send({ message: 'Usuario registrado con éxito!' + v })
    } catch (error) {
      await transaction.rollback()
      res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }

  // * Traer perfil del usuario
  static async getProfile (req, res) {
    try {
      // TODO: hacer el getPerfile
      const id = req.params.id
      const User = await user.findOne({ where: { id } })
      if (!User) { return res.status(404).send({ message: 'Perfil no encontrado' }) }

      const p = await persons.findOne({ where: { user_id: id } })
      if (!p) { return res.status(404).send({ message: 'Perfil no encontrado' }) }

      return res.status(200).send({
        // id: User.id,
        user_name: User.username,
        rol: User.roles,
        email: User.email,
        status: User.status,
        person_data:
          {
            name: p.name,
            last_name: p.last_name,
            identification: p.identification,
            nationality: p.nationality
          }
      })
    } catch (error) {
      return res.status(500).send({ message: 'Error en el servidor.' })
    }
  }

  // * Traer a todos los usuarios
  static async getAllUsers (req, res) {
    try {
      const u = await persons.findAndCountAll({
        include: [
          { model: user, required: false, attributes: ['id', 'username', 'email'] }
        ],
        limit: 3
      })
      if (!u) { return res.status(404).send({ message: 'usuarios no encontrados' }) }

      return res.status(200).send({
        u
      })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  // * Elimara a un usuario
  static async deleteUser (req, res) {
    try {
      const u = await user.findByPk(req.body.id)
      if (!u) { return res.status(404).send({ message: 'Usuario no encontrado o no existe' }) }
      // eliminacion en cascada
      await Promise.all([
        contract.destroy({ where: { id: u.id } }),
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
      const id = req.query.id
      const u = await user.findByPk(id)

      if (!u) {
        return res.status(404).send({ message: 'Este usuario no existe' })
      }
      // Actualiza los datos del usuario con los valores proporcionados en el cuerpo de la solicitud
      if (req.body.username) {
        u.username = req.body.username
      }
      await u.save()
      res.status(200).send({ message: 'Usuario Editado con exito' })
    } catch (error) {
      res.status(500).send({ message: 'Error en el servidor' })
    }
  }
}
