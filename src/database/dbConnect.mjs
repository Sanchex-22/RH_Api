import config from '../../config/dbConfig.mjs'
/* -- Importa la biblioteca Sequelize para la administración de la base de datos -- */
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
)
console.log(sequelize)
export default sequelize
