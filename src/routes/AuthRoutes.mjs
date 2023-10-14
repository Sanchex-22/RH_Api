import { AuthController } from '../controllers/AuthController.mjs'
import { Router } from 'express'

const AuthRoutes = Router()

// * Auth Routes
AuthRoutes.post('/Login', AuthController.login)
AuthRoutes.post('/Logout', AuthController.logout)
AuthRoutes.post('/Register', AuthController.register)

export default AuthRoutes
