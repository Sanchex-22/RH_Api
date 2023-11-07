import { departmentsController } from '../controllers/DepartmentsController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const DepartmentRouter = Router()

DepartmentRouter.post('/newDepartment',AuthMiddlewire.Authorization, departmentsController.newDepartment)
DepartmentRouter.get('/getDepartment/:id', departmentsController.getDepartment)
DepartmentRouter.get('/getAllDepartment', departmentsController.getAllDepartment)
DepartmentRouter.delete('/deleteDepartment/:id', departmentsController.deleteDepartment)
DepartmentRouter.put('/editDepartment', departmentsController.editDepartment)

export default DepartmentRouter
