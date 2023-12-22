/* eslint-disable camelcase */
import { Sequelize } from 'sequelize'
import { vacationsForm } from '../database/vacationsFormModels.mjs'
import sequelize from '../database/dbConnect.mjs'
import { employee } from '../database/employeeModels.mjs'
export class vacationsFormController {
  static async newVacationsForm (req, res) {
    try {
      const date = new Date()
      const defaultValues = { type: 'vacaciones', status: 'no aprobado', approved_by: '', view: 'false' }
      const { send_by, send_to, tittle, description, start_date, end_date } = req.body

      // calculo de dias
      const inicio = new Date(start_date)
      const final = new Date(end_date)
      const timeDifference = final - inicio

      // Calcula días y horas
      const request_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const request_hour = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

      console.log(`Días de diferencia: ${request_days} días`)
      console.log(`Horas de diferencia: ${request_hour} horas`)

      // verficaciion si el usuario puede pedir vacaciones.
      const r = await employee.findOne({ where: { user_id: send_by } })
      const contrato_id = r.contract_id

      const ObtenerInformacionEmpleadoContrato = async (send_by, contrato_id) => {
        const result = await sequelize.query(
          'CALL ObtenerInformacionEmpleadoContrato(:send_by, :contrato_id)',
          {
            replacements: { send_by, contrato_id },
            type: Sequelize.QueryTypes.SELECT
          }
        )
        return result
      }
      ObtenerInformacionEmpleadoContrato(send_by, contrato_id)
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.error(error)
        })

      console.log(ObtenerInformacionEmpleadoContrato)

      await vacationsForm.create({
        type: defaultValues.type,
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
        request_days
      })
      res.status(201).send({ message: 'Formulario Enviado a ' + send_by + ' con éxito!' })
    } catch (error) {
      return res.status(500).send({ message: 'error en el servidor', error })
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
