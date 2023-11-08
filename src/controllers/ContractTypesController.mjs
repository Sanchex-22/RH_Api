import { contractTypes } from '../database/contractTypeModels.mjs'

export class contractTypesController {
  static async newContractTypes (req, res) {
    try {
      const { name } = req.body
      // TODO: Hacer el create company
      const existingDept = await contractTypes.findOne({ where: { name } })
      if (existingDept) { return res.status(400).send({ message: 'Ya existe un departamento con ese nombre ' }) }

      await contractTypes.create({
        name
      })
      res.status(201).send({ message: 'tipo de contrato registrado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async editContractTypes (req, res) {
    try {
      // TODO: Hacer el edit company
      const id = req.query.id
      const d = await contractTypes.findByPk(id)

      if (!d) { return res.status(404).send({ message: 'el tipo de contrato no existe' }) }
      if (req.body.dp_name) {
        d.dp_name = req.body.dp_name
      }
      await d.save()
      res.status(200).send({ message: 'tipo de contrato Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteContractTypes (req, res) {
    try {
      // TODO: Hacer el delete company
      const d = await contractTypes.findByPk(req.body.id)
      if (!d) { return res.status(404).send({ message: 'tipo de contrato no encontrado o no existe' }) }
      await Promise.all([
        d.destroy()
      ])
      res.status(201).send({ message: 'tipo de contrato eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getContractTypes (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await contractTypes.findOne({ where: { id: req.query.id } })
      if (!d) { return res.status(404).send({ message: 'tipo de contrato no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllContractTypes (req, res) {
    try {
      // TODO: Hacer el create company
      const d = await contractTypes.findAll()
      if (!d) { return res.status(404).send({ message: 'tipo de contrato no encontrado' }) }
      return res.status(200).json(d)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
