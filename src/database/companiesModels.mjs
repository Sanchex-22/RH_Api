import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { department } from './departmentModels.mjs'
class companies extends Model {}

companies.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    department_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: department,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    number_ruc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'companies'
  }
)

companies.belongsTo(department, {
  foreignKey: 'department_id',
  onDelete: 'CASCADE'
})

export { companies }

await companies.sync()
