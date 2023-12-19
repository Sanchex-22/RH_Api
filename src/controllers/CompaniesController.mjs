/* eslint-disable camelcase */
import { companies } from '../database/companiesModels.mjs'
import { department } from '../database/departmentModels.mjs'

export class companiesController {
  static async newCompany (req, res) {
    try {
      // TODO: Hacer el create company
      const { department_id, number_ruc, company_name } = req.body
      console.log(department_id, number_ruc, company_name)
      const existingDept = await department.findOne({ where: { id: department_id } })
      if (!existingDept) { return res.status(400).send({ message: 'El departamento seleccionado No Existe' }) }

      const existingCompany = await companies.findOne({ where: { company_name } })
      if (existingCompany) { return res.status(400).send({ message: 'El Nombre de esta compañia ya Existe' }) }

      await companies.create({
        department_id,
        number_ruc,
        company_name
      })
      res.status(201).send({ message: 'Compañia registrada con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor', error })
    }
  }

  static async editCompany (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteCompany (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getCompany (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllCompany (req, res) {
    try {
      // TODO: Hacer el create company
      const c = await companies.findAll()
      if (!c) { return res.status(404).send({ message: 'Compañia no encontrada' }) }
      return res.status(200).json(c)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
