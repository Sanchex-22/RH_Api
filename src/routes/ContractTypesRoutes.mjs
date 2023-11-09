import { contractTypesController } from '../controllers/ContractTypesController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const ContractTypesRouter = Router()

ContractTypesRouter.post('/newContractTypes', AuthMiddlewire.Authorization, contractTypesController.newContractTypes)
ContractTypesRouter.get('/getContractTypes/:id', AuthMiddlewire.Authorization, contractTypesController.getContractTypes)
ContractTypesRouter.get('/getAllContractTypes', AuthMiddlewire.Authorization, contractTypesController.getAllContractTypes)
ContractTypesRouter.delete('/deleteContractTypes', AuthMiddlewire.Authorization, contractTypesController.deleteContractTypes)
ContractTypesRouter.put('/editContractTypes/:id', AuthMiddlewire.Authorization, contractTypesController.editContractTypes)

export default ContractTypesRouter
