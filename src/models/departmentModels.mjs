import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('department', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dp_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  num_employees: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
