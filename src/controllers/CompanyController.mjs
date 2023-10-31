import { companies } from '../database/companiesModels.mjs'
import { department } from '../database/departmentModels.mjs'

export async function insertCompany () {
  await companies.bulkCreate([
    {
      number_ruc: '12345',
      company_name: 'Company 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      number_ruc: '67890',
      company_name: 'Company 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
}

export async function insertDepartment () {
  await department.bulkCreate([
    {
      dp_name: 'IT',
      num_employees: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dp_name: 'Contabilidad',
      num_employees: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ])
}
