import { userController } from '../controllers/UserController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const UserRouter = Router()

// * User Routes
UserRouter.post('/newUser', AuthMiddlewire.Authorization, userController.newUser)
UserRouter.get('/profile/:id', AuthMiddlewire.Authorization, userController.getProfile)
UserRouter.get('/getAllUser', AuthMiddlewire.Authorization, userController.getAllUsers)
UserRouter.delete('/deleteuser/:id', AuthMiddlewire.Authorization, userController.deleteUser)
UserRouter.put('/editUser', AuthMiddlewire.Authorization, userController.editUser)

export default UserRouter
