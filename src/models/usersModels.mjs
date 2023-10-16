import { DataTypes } from 'sequelize'
import { sequelize } from '../../server.mjs'

const User = sequelize.define('users', {
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

export default User
