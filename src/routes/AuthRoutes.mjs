import { authController } from '../controllers/AuthController.mjs'
import { Router } from 'express'

const authRoutes = Router()

// * Auth Routes
authRoutes.post('/Login', authController.login)
authRoutes.post('/Logout', authController.logout)

export default authRoutes
