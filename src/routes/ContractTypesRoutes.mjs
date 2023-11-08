import { contractTypesController } from '../controllers/ContractTypesController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const ContractTypesRouter = Router()

ContractTypesRouter.post('/newContract', AuthMiddlewire.Authorization, contractTypesController.newContractTypes)
ContractTypesRouter.get('/getContract/:id', AuthMiddlewire.Authorization, contractTypesController.getContractTypes)
ContractTypesRouter.get('/getAllContract', AuthMiddlewire.Authorization, contractTypesController.getAllContractTypes)
ContractTypesRouter.delete('/deleteContract', AuthMiddlewire.Authorization, contractTypesController.deleteContractTypes)
ContractTypesRouter.put('/editContract/:id', AuthMiddlewire.Authorization, contractTypesController.editContractTypes)

export default ContractTypesRouter
