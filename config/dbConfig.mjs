import { config } from 'dotenv'
config({ path: '../.env' })

export const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '12345',
  DB: 'recursoshumanos',
  dialect: 'mysql',
  pool: {
    max: parseInt('8'),
    min: parseInt('0'),
    acquire: parseInt('300000'),
    idle: parseInt('100000')
  }
}
export default dbConfig
