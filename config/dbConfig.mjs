import { config } from 'dotenv'
import { Sequelize } from 'sequelize'

config()

const dbData = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_POOL_MAX),
    min: parseInt(process.env.DB_POOL_MIN),
    acquire: parseInt(process.env.DB_POOL_ACQUIRE),
    idle: parseInt(process.env.DB_POOL_IDLE)
  }
}

// * Crea la conexion a la db
const sequelize = new Sequelize(dbData.DB, dbData.USER, dbData.PASSWORD, {
  host: dbData.HOST,
  dialect: dbData.dialect
  // Otras opciones, como 'logging: false', se pueden agregar aquí si es necesario.
})

// * Verificar la conexión a la base de datos
async function checkDatabaseConnection () {
  try {
    await sequelize.authenticate()
    console.log('The connection to the MySQL database was established successfully.')
  } catch (error) {
    console.error('Error connecting to database: ', error)
  }
}

async function modelSynchronization () {
  try {
    await sequelize.sync()
    // !User.sync() - This creates the table if it doesn't exist
    // !User.sync({ force: true }) - This creates the table, dropping it first if it already existed
    // !User.sync({ alter: true }) - This checks what is the current state of the table in the database
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.error('Error syncing models: ', error)
  }
}

// * Export Sequelize y la función de verificación
export { sequelize, checkDatabaseConnection, modelSynchronization }
