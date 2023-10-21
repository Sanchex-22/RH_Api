import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contract_type: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
})
