import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { user } from './usersModels.mjs'

class vacations extends Model {}

vacations.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    accumulated_vacations: {
      type: DataTypes.INTEGER
    },
    aproved_forms: {
      type: DataTypes.INTEGER
    },
    rejected_forms: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: user,
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  },

  {
    sequelize,
    modelName: 'vacations'
  }
)

vacations.belongsTo(user, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

export { vacations }
await vacations.sync()
