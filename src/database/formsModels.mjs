import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('forms', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_forms: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
})
