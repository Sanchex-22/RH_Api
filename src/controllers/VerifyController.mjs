export class VerifiController {
  static async email (req, res) {
    try {
      // !Enviar Email
      return res.status(200).send({ message: `Codigo enviado con éxito a su correo ${req.body.email}` })
    } catch (error) {
      console.error('Error en el bloque catch:', error)
      return res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }

  static async verifyCode (req, res) {
    try {
      // !Verificar codigo
      return res.status(400).send({ message: 'Código inválido o ha expirado' })
    } catch (error) {
      console.error('Error en el bloque catch:', error)
      return res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }
}
