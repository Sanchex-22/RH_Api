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
      // TODO: Hacer el edit company
      const id = req.query.id
      const d = await department.findByPk(id)

      if (!d) { return res.status(404).send({ message: 'el departamento no existe' }) }
      if (req.body.dp_name) {
        d.dp_name = req.body.dp_name
      }
      await d.save()
      res.status(200).send({ message: 'Departamento Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteDepartment (req, res) {
    try {
      // TODO: Hacer el delete company
      const d = await department.findByPk(req.body.id)
      if (!d) { return res.status(404).send({ message: 'Departamento no encontrado o no existe' }) }
      await Promise.all([
        d.destroy()
      ])
      res.status(201).send({ message: 'departamento eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getDepartment (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await department.findOne({ where: { id: req.query.id } })
      if (!d) { return res.status(404).send({ message: 'Departamento no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllDepartment (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await department.findAll()
      if (!d) { return res.status(404).send({ message: 'Departamento no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
