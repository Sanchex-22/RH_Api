import { sequelize } from '../server.mjs'
import './usersModels.mjs'

export async function createTables () {
  try {
    await sequelize.sync({ force: true })
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.log('Io esto no funciona')
  }
}
