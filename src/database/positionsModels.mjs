import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'

class position extends Model {}

position.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    position_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'position'
  }
)
export { position }
position.sync()
