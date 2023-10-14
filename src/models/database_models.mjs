import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/db_config.mjs'

sequelize.define()

/* -- Importa el modelo de usuario y lo asocia con la conexión a la base de datos
db.User = require('./users_models.js')(sequelize, Sequelize)
db.Person = require('./persons_model.js')(sequelize, Sequelize)
db.Contract = require('./contracts_models.js')(sequelize, Sequelize)
db.EmployeeAssistance = require('./employee_assistance_models.js')(sequelize, Sequelize)
db.Department = require('./department_models.js')(sequelize, Sequelize)
db.Form = require('./forms_models.js')(sequelize, Sequelize)
db.Permission = require('./permisions_models.js')(sequelize, Sequelize)
db.Vacation = require('./vacations_models.js')(sequelize, Sequelize)
db.Request = require('./request_moduls.js')(sequelize, Sequelize)
db.TypeContract = require('./type_contracts_models.js')(sequelize, Sequelize)
db.Company = require('./companies_models.js').default(sequelize, Sequelize)

-- Exporta el objeto db para que pueda ser utilizado en otros archivos --
db.sequelize = sequelize
db.Sequelize = Sequelize

 -- Establece la relación uno a uno entre User y Person --
db.User.hasOne(db.Person, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

db.User.hasOne(db.Person, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
})

db.User.hasOne(db.Person, {
  foreignKey: 'contract_id',
  onDelete: 'CASCADE'
})

db.User.hasOne(db.Person, {
  foreignKey: 'asistence_id',
  onDelete: 'CASCADE'
})

db.Person.belongsTo(db.User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

export default db
*/
