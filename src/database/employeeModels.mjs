import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Opcional dependiendo de tus necesidades
    references: {
      model: 'users', // Nombre de la tabla a la que hace referencia
      key: 'id' // Nombre de la clave primaria en la tabla persons
    }
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Opcional dependiendo de tus necesidades
    references: {
      model: 'companies', // Nombre de la tabla a la que hace referencia
      key: 'id' // Nombre de la clave primaria en la tabla persons
    }
  }
})
