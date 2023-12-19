import { vacationsController } from '../controllers/VacationsController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const VacationsRouter = Router()

VacationsRouter.post('/newVacations', AuthMiddlewire.Authorization, vacationsController.newVacations)
VacationsRouter.get('/getVacations/:id', AuthMiddlewire.Authorization, vacationsController.getVacations)
VacationsRouter.get('/getAllVacations', AuthMiddlewire.Authorization, vacationsController.getAllVacations)
VacationsRouter.delete('/deleteVacations', AuthMiddlewire.Authorization, vacationsController.deleteVacations)
VacationsRouter.put('/editVacations/:id', AuthMiddlewire.Authorization, vacationsController.editVacations)

export default VacationsRouter
