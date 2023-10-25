import { config } from 'dotenv'
config({ path: '../.env' })

const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '12345',
  DB: 'recursoshumanos',
  dialect: 'mysql',
  pool: {
    max: parseInt(process.env.DB_POOL_MAX),
    min: parseInt(process.env.DB_POOL_MIN),
    acquire: parseInt(process.env.DB_POOL_ACQUIRE),
    idle: parseInt(process.env.DB_POOL_IDLE)
  }
}
console.log(dbConfig)
export default dbConfig
