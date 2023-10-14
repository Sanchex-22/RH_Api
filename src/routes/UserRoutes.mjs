import { UserController } from '../controllers/UserController.mjs'
import { Router } from 'express'

const UserRouter = Router()

// * User Routes
UserRouter.get('/Profile/:id', UserController.getProfile)
UserRouter.get('/GetAllUser', UserController.getAllUsers)
UserRouter.delete('/DeleteUser/:id', UserController.deleteUser)
UserRouter.put('/EditUser', UserController.editUser)

export default UserRouter
