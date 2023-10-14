import { config } from 'dotenv'
import { Sequelize } from 'sequelize'

// Carga las variables de entorno desde el archivo .env
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

// Crea una instancia de Sequelize utilizando las variables de entorno
const sequelize = new Sequelize(dbData.DB, dbData.USER, dbData.PASSWORD, {
  host: dbData.HOST,
  dialect: dbData.dialect
  // Otras opciones, como 'logging: false', se pueden agregar aquí si es necesario.
})

// Función para verificar la conexión a la base de datos
async function checkDatabaseConnection () {
  try {
    await sequelize.authenticate()
    console.log('Conexión a la base de datos MySQL establecida correctamente.')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}

// Exporta la instancia de Sequelize y la función de verificación
export { sequelize, checkDatabaseConnection }
