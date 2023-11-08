/* eslint-disable camelcase */
import { position } from '../database/positionsModels.mjs'

export class positionsController {
  static async newPositions (req, res) {
    try {
      const { dp_name } = req.body
      // TODO: Hacer el create company
      const existingDept = await position.findOne({ where: { dp_name } })
      if (existingDept) { return res.status(400).send({ message: 'Ya existe un departamento con ese nombre ' }) }

      await position.create({
        dp_name
      })
      res.status(201).send({ message: 'Cargo registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editPositions (req, res) {
    try {
      // TODO: Hacer el edit company
      const id = req.query.id
      const d = await position.findByPk(id)

      if (!d) { return res.status(404).send({ message: 'el cargo no existe' }) }
      if (req.body.dp_name) {
        d.dp_name = req.body.dp_name
      }
      await d.save()
      res.status(200).send({ message: 'Cargo Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deletePositions (req, res) {
    try {
      // TODO: Hacer el delete company
      const d = await position.findByPk(req.body.id)
      if (!d) { return res.status(404).send({ message: 'Cargo no encontrado o no existe' }) }
      await Promise.all([
        d.destroy()
      ])
      res.status(201).send({ message: 'Cargo eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getPositions (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await position.findOne({ where: { id: req.query.id } })
      if (!d) { return res.status(404).send({ message: 'Cargo no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllPositions (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await position.findAll()
      if (!d) { return res.status(404).send({ message: 'Cargo no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
