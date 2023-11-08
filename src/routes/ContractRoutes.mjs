import { contractController } from '../controllers/ContractController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const ContractRouter = Router()

ContractRouter.post('/newContract', AuthMiddlewire.Authorization, contractController.newContract)
ContractRouter.get('/getContract/:id', AuthMiddlewire.Authorization, contractController.getContract)
ContractRouter.get('/getAllContract', AuthMiddlewire.Authorization, contractController.getAllContract)
ContractRouter.delete('/deleteContract', AuthMiddlewire.Authorization, contractController.deleteContract)
ContractRouter.put('/editContract/:id', AuthMiddlewire.Authorization, contractController.editContract)

export default ContractRouter
