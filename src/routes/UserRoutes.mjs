import { userController } from '../controllers/UserController.mjs'
import { Router } from 'express'

const UserRouter = Router()

// * User Routes
UserRouter.post('/newUser', userController.newUser)
UserRouter.get('/profile/:id', userController.getProfile)
UserRouter.get('/getAllUser', userController.getAllUsers)
UserRouter.delete('/deleteuser/:id', userController.deleteUser)
UserRouter.put('/editUser', userController.editUser)

export default UserRouter
