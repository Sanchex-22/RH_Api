export class authController {
  // * Login
  static async login (req, res) {
    try {
      // !Iniciar Session

      return res.status(200).send()
    } catch (error) {
      return res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }
  // * logout

  static async logout (req, res) {
    try {
      // !Cerrar session: req.session = null
      return res.status(200).send({
        message: 'You ve been signed out!'
      })
    } catch (err) {
      this.next(err)
    }
  }

  //* register
  static async register (req, res) {
    try {
      // !Registrar Usuario
      res.status(201).send({ message: 'Usuario registrado con éxito!' })
    } catch (error) {
      res.status(500).send({ message: 'Error interno del servidor', error })
    }
  }
}
