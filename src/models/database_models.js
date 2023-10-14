import { Sequelize } from 'sequelize'

const db = {}

/* -- Importa el modelo de usuario y lo asocia con la conexión a la base de datos -- */
db.User = require('../models/users_models.js')(sequelize, Sequelize)
db.Person = require('../models/persons_model.js')(sequelize, Sequelize)
db.Contract = require('../models/contracts_models')(sequelize, Sequelize)
db.EmployeeAssistance = require('../models/employee_assistance_models')(sequelize, Sequelize)
db.Department = require('../models/department_models')(sequelize, Sequelize)
db.Form = require('../models/forms_models')(sequelize, Sequelize)
db.Permission = require('../models/permisions_models')(sequelize, Sequelize)
db.Vacation = require('../models/vacations_models')(sequelize, Sequelize)
db.Request = require('../models/request_moduls')(sequelize, Sequelize)
db.TypeContract = require('../models/type_contracts_models')(sequelize, Sequelize)
db.Company = require('../models/companies_models').default(sequelize, Sequelize)

/* -- Exporta el objeto db para que pueda ser utilizado en otros archivos -- */
db.sequelize = sequelize
db.Sequelize = Sequelize

/* -- Establece la relación uno a uno entre User y Person -- */
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
