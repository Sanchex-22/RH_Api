import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define('persons', {
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
  identification: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  second_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  second_lastname: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  nacionality: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
})
