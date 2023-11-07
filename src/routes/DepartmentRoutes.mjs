import { departmentsController } from '../controllers/DepartmentsController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const DepartmentRouter = Router()

DepartmentRouter.post('/newDepartment', AuthMiddlewire.Authorization, departmentsController.newDepartment)
DepartmentRouter.get('/getDepartment/:id', AuthMiddlewire.Authorization, departmentsController.getDepartment)
DepartmentRouter.get('/getAllDepartment', AuthMiddlewire.Authorization, departmentsController.getAllDepartment)
DepartmentRouter.delete('/deleteDepartment/:id', AuthMiddlewire.Authorization, departmentsController.deleteDepartment)
DepartmentRouter.put('/editDepartment', AuthMiddlewire.Authorization, departmentsController.editDepartment)

export default DepartmentRouter
