import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config({ path: '../.env' })

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

const sequelize = new Sequelize(dbData.DB, dbData.USER, dbData.PASSWORD, {
  host: dbData.HOST,
  dialect: dbData.dialect,
  pool: {
    max: dbData.pool.max,
    min: dbData.pool.min,
    acquire: dbData.pool.acquire,
    idle: dbData.pool.idle
  }
  // Otras opciones, como 'logging: false', se pueden agregar aquí si es necesario.
})

export default sequelize
