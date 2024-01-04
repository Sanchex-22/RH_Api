/* eslint-disable camelcase */
import { vacations } from '../database/vacationsModels.mjs'
export class vacationsController {
  static async newVacations (req, res) {
    try {
      res.status(201).send({ message: 'Cargo registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editVacations (req, res) {
    try {
      res.status(200).send({ message: 'Cargo Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteVacations (req, res) {
    try {
      res.status(201).send({ message: 'Cargo eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getVacations (req, res) {
    try {
      const v = await vacations.findOne({ where: req.body.id })
      return res.status(200).json(v)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllVacations (req, res) {
    try {
      const v = await vacations.findAll()
      return res.status(200).json(v)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async cronJob (req, res) {
    try {
      //
    } catch (error) {

    }
  }
}
