import { vacationsFormController } from '../controllers/VacationsFormController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const VacationsFormRouter = Router()

VacationsFormRouter.post('/newVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.newVacationsForm)
VacationsFormRouter.get('/getVacationsForm/:id', AuthMiddlewire.Authorization, vacationsFormController.getVacationsForm)
VacationsFormRouter.get('/getAllVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.getAllVacationsForm)
VacationsFormRouter.delete('/deleteVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.deleteVacationsForm)
VacationsFormRouter.put('/editVacationsForm/:id', AuthMiddlewire.Authorization, vacationsFormController.editVacationsForm)
VacationsFormRouter.put('/viewVacationsForms/:id', AuthMiddlewire.Authorization, vacationsFormController.viewVacationsForm)
VacationsFormRouter.put('/revisionVacationsForm', AuthMiddlewire.Authorization, vacationsFormController.revisionVacationsForm)
export default VacationsFormRouter
