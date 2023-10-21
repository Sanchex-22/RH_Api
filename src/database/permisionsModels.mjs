import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('permisions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})
