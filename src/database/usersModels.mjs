import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'

class user extends Model {}

user.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roles: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'user'
  }
)

export { user }
