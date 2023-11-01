import { departmentsController } from '../controllers/DepartmentsController.mjs'
import { Router } from 'express'

const DepartmentRouter = Router()

DepartmentRouter.post('/newDepartment', departmentsController.newDepartment)
DepartmentRouter.get('/getDepartment/:id', departmentsController.getDepartment)
DepartmentRouter.get('/getAllDepartment', departmentsController.getAllDepartment)
DepartmentRouter.delete('/deleteDepartment/:id', departmentsController.deleteDepartment)
DepartmentRouter.put('/editDepartment', departmentsController.editDepartment)

export default DepartmentRouter
