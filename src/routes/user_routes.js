import { UserController } from '../../controllers/userController'
import { Router } from 'express'

const userrouter = Router()

// rutas user
userrouter.get('/profile/:id', UserController)
userrouter.get('/alluser', UserController.getAllUsers)
userrouter.post('/eliminateuser', UserController.eliminateUser)
userrouter.put('/edituser', UserController.editUser)

export default userrouter
