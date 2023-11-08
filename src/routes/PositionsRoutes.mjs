import { positionsController } from '../controllers/PositionsControler.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const PositionsRouter = Router()

PositionsRouter.post('/newPositions', AuthMiddlewire.Authorization, positionsController.newPositions)
PositionsRouter.get('/getPositions/:id', AuthMiddlewire.Authorization, positionsController.getPositions)
PositionsRouter.get('/getAllPositions', AuthMiddlewire.Authorization, positionsController.getAllPositions)
PositionsRouter.delete('/deletePositions', AuthMiddlewire.Authorization, positionsController.deletePositions)
PositionsRouter.put('/editPositions/:id', AuthMiddlewire.Authorization, positionsController.editPositions)

export default PositionsRouter
