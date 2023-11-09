/* eslint-disable camelcase */
import { contract } from '../database/contractModels.mjs'
import { contractTypes } from '../database/contractTypeModels.mjs'
import { position } from '../database/positionsModels.mjs'

export class contractController {
  static async newContract (req, res) {
    try {
      const { type_id, position_id, salary, start_date, end_date } = req.body
      console.log(type_id, " & ", position_id)
      // TODO: Hacer el create company
      const existingcontactype = await contractTypes.findOne({ where: { id: type_id } })
      if (!existingcontactype) { return res.status(400).send({ message: 'no existe este tipo de contrato con ese nombre ' }) }

      const existingposition = await position.findOne({ where: { id: position_id } })
      if (!existingposition) { return res.status(400).send({ message: 'no existe esta posicion ' }) }

      const c = await contract.create({
        type_id,
        position_id,
        salary,
        start_date,
        end_date
      })
      if (!c) { return res.status(201).send({ message: 'El contrato no se registro' }) }
      return res.status(201).send({ message: 'El contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editContract (req, res) {
    try {
      // TODO: Hacer el edit company
      const id = req.query.id
      const d = await contract.findByPk(id)

      if (!d) { return res.status(404).send({ message: 'El contrato no existe' }) }
      if (req.body.dp_name) {
        d.dp_name = req.body.dp_name
      }
      await d.save()
      return res.status(200).send({ message: 'Contrato Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteContract (req, res) {
    try {
      // TODO: Hacer el delete company
      const d = await contract.findByPk(req.body.id)
      if (!d) { return res.status(404).send({ message: 'Contrato no encontrado o no existe' }) }
      await Promise.all([
        d.destroy()
      ])
      return res.status(201).send({ message: 'Contrato eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getContract (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await contract.findOne({ where: { id: req.query.id } })
      if (!d) { return res.status(404).send({ message: 'Contrato no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllContract (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await contract.findAll()
      if (!d) { return res.status(404).send({ message: 'Contrato no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
