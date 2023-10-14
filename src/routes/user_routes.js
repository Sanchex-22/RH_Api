import { UserController } from '../controllers/user_Controller'
import { Router } from 'express'

const userrouter = Router()

// * User Routes
userrouter.get('/profile/:id', UserController) // !creo que algo falta aqui
userrouter.get('/alluser', UserController.getAllUsers)
userrouter.post('/eliminateuser', UserController.eliminateUser)
userrouter.put('/edituser', UserController.editUser)

export default userrouter
