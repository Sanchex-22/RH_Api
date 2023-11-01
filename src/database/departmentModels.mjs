import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'

class department extends Model {}

department.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    dp_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    num_employees: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'department'
  }
)
export { department }
department.sync()
