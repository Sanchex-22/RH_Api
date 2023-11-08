import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { user } from './usersModels.mjs'
import { companies } from './companiesModels.mjs'
import { contract } from './contractModels.mjs'

class employee extends Model {}

employee.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: user,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    company_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: companies,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    contract_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: companies,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    asistence: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'employee'
  }
)
employee.belongsTo(user, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
employee.belongsTo(companies, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
})
employee.belongsTo(contract, {
  foreignKey: 'contract_id',
  onDelete: 'CASCADE'
})
export { employee }
await employee.sync()
