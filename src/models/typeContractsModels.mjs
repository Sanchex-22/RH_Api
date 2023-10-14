import { sequelize } from '../../config/dbConfig.mjs'
import { DataTypes } from 'sequelize'

sequelize.define('type_contracts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contract_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
})
