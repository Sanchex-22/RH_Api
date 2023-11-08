import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { contractTypes } from './contractTypeModels.mjs'
import { position } from './positionsModels.mjs'

class contract extends Model {}

contract.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: contractTypes,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    position_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: position,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'contract'
  }
)

contract.belongsTo(contractTypes, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
})

contract.belongsTo(position, {
  foreignKey: 'position_id',
  onDelete: 'CASCADE'
})

export { contract }

contract.sync()
