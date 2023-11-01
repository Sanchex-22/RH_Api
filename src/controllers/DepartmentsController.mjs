/* eslint-disable camelcase */
import { department } from '../database/departmentModels.mjs'

export class departmentsController {
  static async newDepartment (req, res) {
    try {
      const { dp_name } = req.body
      // TODO: Hacer el create company
      const existingDept = await department.findOne({ where: { dp_name } })
      if (existingDept) { return res.status(400).send({ message: 'Ya existe un departamento con ese nombre ' }) }

      await department.create({
        dp_name
      })
      res.status(201).send({ message: 'Departamento registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editDepartment (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteDepartment (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getDepartment (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllDepartment (req, res) {
    try {
      // TODO: Hacer el create company
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
