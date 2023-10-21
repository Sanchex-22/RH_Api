import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('companies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  number_ruc: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  company_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
})
