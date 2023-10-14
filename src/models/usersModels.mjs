import { sequelize } from '../../config/dbConfig.mjs'
import { DataTypes } from 'sequelize'

sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  roles: {
    type: DataTypes.STRING
  }
})
