import { employeeController } from '../controllers/EmployeeController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const EmployeeRouter = Router()

EmployeeRouter.post('/newEmployee', AuthMiddlewire.Authorization, employeeController.newEmployee)
EmployeeRouter.get('/getEmployee/:id', AuthMiddlewire.Authorization, employeeController.getEmployee)
EmployeeRouter.get('/getAllEmployee', AuthMiddlewire.Authorization, employeeController.getAllEmployee)
EmployeeRouter.delete('/deleteEmployee', AuthMiddlewire.Authorization, employeeController.deleteEmployee)
EmployeeRouter.put('/editEmployee/:id', AuthMiddlewire.Authorization, employeeController.editEmployee)

export default EmployeeRouter
