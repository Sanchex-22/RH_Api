import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('companies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Opcional dependiendo de tus necesidades
    references: {
      model: 'deparment', // Nombre de la tabla a la que hace referencia
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
})
