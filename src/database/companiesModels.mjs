import { DataTypes, Model } from 'sequelize'
import sequelize from './dbConnect.mjs'
import { department } from './departmentModels.mjs'

class companies extends Model {}

companies.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Opcional dependiendo de tus necesidades
      references: {
        model: department, // Nombre de la tabla a la que hace referencia
        key: 'id' // Nombre de la clave primaria en la tabla persons
      }
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

export { companies }
