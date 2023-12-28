import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { contractTypes } from './contractTypeModels.mjs'
import { position } from './positionsModels.mjs'
import { user } from './usersModels.mjs'
import { department } from './departmentModels.mjs'
import { companies } from './companiesModels.mjs'

class contract extends Model {}

contract.init(
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
    department_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: department,
        key: 'id'
      },
      onDelete: 'CASCADE'
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
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
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
contract.belongsTo(user, {
  foreignKey: 'user_id',
  OnDelete: 'CASCADE'
})

contract.belongsTo(contractTypes, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
})

contract.belongsTo(position, {
  foreignKey: 'position_id',
  onDelete: 'CASCADE'
})

contract.belongsTo(companies, {
  foreignKey: 'company_id',
  OnDelete: 'CASCADE'
})

contract.belongsTo(department, {
  foreignKey: 'department_id',
  OnDelete: 'CASCADE'
})
export { contract }

contract.sync()
