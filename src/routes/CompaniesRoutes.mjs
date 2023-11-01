import { companiesController } from '../controllers/CompaniesController.mjs'
import { Router } from 'express'

const CompaniesRouter = Router()
// company routes
CompaniesRouter.post('/newCompany', companiesController.newCompany)
CompaniesRouter.get('/getCompany/:id', companiesController.getCompany)
CompaniesRouter.get('/getAllCompany', companiesController.getAllCompany)
CompaniesRouter.delete('/deleteCompany/:id', companiesController.deleteCompany)
CompaniesRouter.post('/editCompany', companiesController.editCompany)

export default CompaniesRouter
