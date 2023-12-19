import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { user } from './usersModels.mjs'

class vacationsForm extends Model {}

vacationsForm.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: {
      type: DataTypes.DATE
    },
    request_days: {
      type: DataTypes.INTEGER
    },
    aproved_days: {
      type: DataTypes.INTEGER
    },
    aproved_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    view: {
      type: DataTypes.BOOLEAN
    },
    send_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: user,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    send_to: {
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
    modelName: 'vacationsForm'
  }
)

vacationsForm.belongsTo(user, {
  foreignKey: 'send_by',
  onDelete: 'CASCADE'
})

vacationsForm.belongsTo(user, {
  foreignKey: 'send_to',
  onDelete: 'CASCADE'
})

export { vacationsForm }
await vacationsForm.sync()
