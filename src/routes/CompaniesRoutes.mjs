import { companiesController } from '../controllers/CompaniesController.mjs'
import { Router } from 'express'
import { AuthMiddlewire } from '../middleware/AuthMiddleware.mjs'

const CompaniesRouter = Router()
// company routes
CompaniesRouter.post('/newCompany', AuthMiddlewire.Authorization, companiesController.newCompany)
CompaniesRouter.post('/newCompany', AuthMiddlewire.Authorization, companiesController.newCompany)
CompaniesRouter.get('/getCompany/:id', AuthMiddlewire.Authorization, companiesController.getCompany)
CompaniesRouter.get('/getAllCompany', AuthMiddlewire.Authorization, companiesController.getAllCompany)
CompaniesRouter.delete('/deleteCompany/:id', AuthMiddlewire.Authorization, companiesController.deleteCompany)
CompaniesRouter.post('/editCompany', AuthMiddlewire.Authorization, companiesController.editCompany)

export default CompaniesRouter
