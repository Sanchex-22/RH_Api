/* eslint-disable camelcase */
import { vacationsForm } from '../database/vacationsFormModels.mjs'
import { contract } from '../database/contractModels.mjs'
export class vacationsFormController {
  static async newVacationsForm (req, res) {
    try {
      const date = new Date()
      const fecha_actual = new Date()
      const defaultValues = { type: 'vacaciones', status: 'no aprobado', approved_by: '', view: 'false', comment: '' }
      const { send_by, send_to, tittle, description, start_date, end_date } = req.body

      // verficaciion si el usuario puede pedir vacaciones.
      const contrato = await contract.findOne({ where: { user_id: send_by } })
      console.log(' <------>' + contrato.start_date)
      const fecha_inicio_emp = contrato.start_date

      const fecha_fin_emp = new Date(fecha_inicio_emp)
      fecha_fin_emp.setMonth(fecha_fin_emp.getMonth() + 11)
      console.log(fecha_actual + ' y ' + fecha_fin_emp)

      if ((fecha_actual >= fecha_fin_emp)) {
      // calculo de dias
        const inicio = new Date(start_date)
        const final = new Date(end_date)
        const timeDifference = final - inicio

        // Calcula días y horas
        const request_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const request_hour = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        // console.log(`Días de diferencia: ${request_days} días`)
        console.log(`Horas de diferencia: ${request_hour} horas`)

        await vacationsForm.create({
          status: defaultValues.status,
          approved_by: defaultValues.approved_by,
          view: defaultValues.view,
          send_by,
          send_to,
          send_date: date,
          tittle,
          description,
          start_date,
          end_date,
          request_days,
          comment: defaultValues.comment
        })
        return res.status(201).send({ message: 'Formulario Enviado a ' + send_by + ' con éxito!' })
      }
      return res.status(201).send({ message: 'No puede pedir vacaciones antes de los 11 meses ' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor', error })
    }
  }

  static async editVacationsForm (req, res) {
    try {
      let { status, send_to, tittle, description, start_date, end_date } = req.body
      const form = await vacationsForm.findOne({ where: { id: req.params.id } })
      // validacion de NULL
      status = status === '' ? form.status : status
      send_to = send_to === '' ? form.send_to : send_to
      tittle = tittle === '' ? form.tittle : tittle
      description = description === '' ? form.description : description
      start_date = start_date === '' ? form.start_date : start_date
      end_date = end_date === '' ? form.end_date : end_date

      if (!form) { return res.status(404).send({ message: 'formulario no encontraedo o no existe' }) }
      const inicio = new Date(form.start_date)
      const final = new Date(form.end_date)
      const timeDifference = final - inicio
      const request_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

      await vacationsForm.update(
        {
          status,
          send_to,
          tittle,
          description,
          start_date,
          end_date,
          request_days
        },
        { where: { id: req.params.id } }
      )

      return res.status(200).send({ message: 'Formulario Editado con exito' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async deleteVacationsForm (req, res) {
    try {
      const form = await vacationsForm.findOne({ where: { id: req.body.id } })
      if (!form) { return res.status(404).send({ message: 'formulario no encontrado o no existe' }) }
      await vacationsForm.destroy({ where: { id: req.body.id } })
      res.status(201).send({ message: 'Formulario eliminado con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getVacationsForm (req, res) {
    try {
      console.log(req)
      const form = await vacationsForm.findOne({ where: { id: req.params.id } })
      if (!form) { return res.status(404).send({ message: 'El formulario no fue encontrado o no existe' }) }
      return res.status(200).json(form)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllVacationsForm (req, res) {
    try {
      const form = await vacationsForm.findAll({
        order: [['createdAt', 'DESC']]
      })
      if (!form) { return res.status(404).send({ message: 'Los formularios no fueron encontrados o no existen' }) }
      return res.status(200).json(form)
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async getAllInboxForms (req, res) {
    try {
      const id = req.body.id
      const form = await vacationsForm.findAll({
        where: { send_to: id },
        order: [['createdAt', 'DESC']]
      })
      if (!form) { return res.status(404).send({ message: 'Los formularios no fueron encontrados o no existen' }) }
      return res.status(200).json(form)
    } catch (error) {
      return res.status(200).json
    }
  }

  // Admin
  static async viewVacationsForm (req, res) {
    try {
      const formExist = await vacationsForm.update({ view: true }, { where: { id: req.params.id } })
      if (!formExist) { return res.status(404).send({ message: 'El formulario seleccionado no fue encontrado o no existe' }) }
      return res.status(200).send({ message: 'A cambiado el estado a en visto' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }

  static async revisionVacationsForm (req, res) {
    try {
      console.log(req.body)
      let a_days = req.body.aproved_days
      a_days = a_days === '' ? '0' : a_days
      const formExist = await vacationsForm.update(
        {
          aproved_by: req.body.aproved_by,
          comment: req.body.comment,
          status: req.body.status,
          aproved_days: a_days
        },
        { where: { id: req.body.id } })
      if (!formExist) {
        return res.status(404).send({ message: 'El formulario seleccionado no fue encontrado o no existe' })
      }
      return res.status(200).send({ message: 'A cambiado el estado del formulario a ' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor' })
    }
  }
}
