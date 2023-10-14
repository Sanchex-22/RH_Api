import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('vacations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  acumulated_vacation: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
