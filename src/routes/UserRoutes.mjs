import { userController } from '../controllers/userController.mjs'
import { Router } from 'express'

const UserRouter = Router()

// * User Routes
UserRouter.get('/Profile/:id', userController.getProfile)
UserRouter.get('/GetAllUser', userController.getAllUsers)
UserRouter.delete('/DeleteUser/:id', userController.deleteUser)
UserRouter.put('/EditUser', userController.editUser)

export default UserRouter
