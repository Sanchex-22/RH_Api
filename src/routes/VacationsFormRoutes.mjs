import { vacationsFormController } from '../controllers/VacationsFormController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const VacationsFormRouter = Router()

VacationsFormRouter.post('/newVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.newVacationsForm)
VacationsFormRouter.get('/getVactionsForm/:id', AuthMiddlewire.Authorization, vacationsFormController.getVacationsForm)
VacationsFormRouter.get('/getAllVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.getAllVacationsForm)
VacationsFormRouter.delete('/deleteVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.deleteVacationsForm)
VacationsFormRouter.put('/editVacations/:id', AuthMiddlewire.Authorization, vacationsFormController.editVacationsForm)

export default VacationsFormRouter
