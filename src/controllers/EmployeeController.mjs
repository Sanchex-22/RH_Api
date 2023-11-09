import { employee } from '../database/employeeModels.mjs'

export class employeeController {
  static async newEmployee (req, res) {
    try {
      // TODO: Hacer el create company
      const existingUser = await employee.findOne({ where: { name } })
      if (existingDept) { return res.status(400).send({ message: 'Ya existe un contrato con ese nombre ' }) }

      await employee.create({
        user_id,
      })
      res.status(201).send({ message: 'El contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
