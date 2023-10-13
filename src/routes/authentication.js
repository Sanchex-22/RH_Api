import { AuthController } from '../controllers/auth_controller'
import { Router } from 'express'

const authroutes = Router()

// * Auth Routes
authroutes.post('/login', AuthController.login)
authroutes.post('/logout', AuthController.logout)
authroutes.post('/register', AuthController.register)

export default authroutes
