import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'

class contractTypes extends Model {}

contractTypes.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contract_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'contract'
  }
)
export { contractTypes }
contractTypes.sync()
