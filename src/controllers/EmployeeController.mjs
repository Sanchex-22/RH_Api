/* eslint-disable camelcase */
import { companies } from '../database/companiesModels.mjs'
import { contract } from '../database/contractModels.mjs'
import { employee } from '../database/employeeModels.mjs'
import { user } from '../database/usersModels.mjs'

export class employeeController {
  static async newEmployee (req, res) {
    try {
      await employee.sync()
      // TODO: Hacer el create company
      const { user_id, company_id, contract_id, asistence } = req.body

      const existingUser = await user.findOne({ where: { id: user_id } })
      if (!existingUser) { return res.status(400).send({ message: 'Este usuario no existe' }) }

      const existingCompany = await companies.findOne({ where: { id: company_id } })
      if (!existingCompany) { return res.status(400).send({ message: 'No existe esta compañia' }) }

      const existingContract = await contract.findOne({ where: { id: contract_id } })
      if (!existingContract) { return res.status(400).send({ message: 'No existe este contrato' }) }

      await employee.create({ user_id, company_id, contract_id, asistence })

      return res.status(201).send({ message: 'El empleado a sido registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editEmployee (req, res) {
    try {
      // TODO: Hacer el create company
      res.status(201).send({ message: 'El contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteEmployee (req, res) {
    try {
      // TODO: Hacer el create company
      res.status(201).send({ message: 'El contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getEmployee (req, res) {
    try {
      // TODO: Hacer el create company
      res.status(201).send({ message: 'El contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllEmployee (req, res) {
    try {
      // TODO: Hacer el create company
      res.status(201).send({ message: 'El contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
