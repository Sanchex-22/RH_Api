import { Sequelize } from 'sequelize'
const config = require('../../config/dbConfig.mjs')

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    dialect: 'sqlite',
    storage: './database.sqlite'
  }
)

const db = {}
db.Sequelize = Sequelize
// Asigna el objeto Sequelize al objeto db
db.sequelize = sequelize

/* -- Importa el modelo de usuario y lo asocia con la conexión a la base de datos -- */
db.user = require('../database/usersModels.mjs')(sequelize, Sequelize)
module.exports = db

export default sequelize
