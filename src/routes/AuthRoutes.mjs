import { authController } from '../controllers/authController.mjs'
import { Router } from 'express'

const authRoutes = Router()

// * Auth Routes
authRoutes.post('/Login', authController.login)
authRoutes.post('/Logout', authController.logout)
authRoutes.post('/Register', authController.register)

export default authRoutes
