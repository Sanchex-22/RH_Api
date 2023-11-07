import { authController } from '../controllers/AuthController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const authRoutes = Router()

// * Auth Routes
authRoutes.post('/Login', authController.login)
authRoutes.post('/Logout', AuthMiddlewire.Authorization, authController.logout)

export default authRoutes
