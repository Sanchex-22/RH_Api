/* eslint-disable camelcase */
import { vacationsForm } from "../database/vacationsFormModels.mjs"
export class vacationsFormController {
  static async newVacationsForm (req, res) {
    try {
      res.status(201).send({ message: 'Cargo registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editVacationsForm (req, res) {
    try {
      res.status(200).send({ message: 'Cargo Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteVacationsForm (req, res) {
    try {
      res.status(201).send({ message: 'Cargo eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getVacationsForm (req, res) {
    try {
      return res.status(200).json('')
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllVacationsForm (req, res) {
    try {
      return res.status(200).json('')
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
