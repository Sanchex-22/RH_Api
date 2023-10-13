const config = require("../database/bd");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,         
    config.USER,       
    config.PASSWORD,  
    {
      host: config.HOST,            
      dialect: config.dialect,           // Dialecto de la base de datos obtenido de la configuración
      pool: {                            // * Configuración del grupo de conexiones de la base de datos
        max: config.pool.max,            // Número máximo de conexiones en el grupo
        min: config.pool.min,            // Número mínimo de conexiones en el grupo
        acquire: config.pool.acquire,    // Tiempo máximo de adquisición de una conexión en milisegundos
        idle: config.pool.idle           // Tiempo máximo de inactividad de una conexión en milisegundos
      }
    }
  );


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize; 

/* -- Importa el modelo de usuario y lo asocia con la conexión a la base de datos -- */
db.user = require("../models/users_models.js")(sequelize, Sequelize);
db.persons = require ("../models/persons_model.js")(sequelize, Sequelize);
db.contracts = require("../models/contracts_models")(sequelize,Sequelize);
db.employee_assistance = require("../models/employee_assistance_models")(sequelize,Sequelize);
db.department = require("../models/department_models")(sequelize,Sequelize);
db.forms = require("../models/forms_models")(sequelize,Sequelize);
db.permisions = require("../models/permisions_models")(sequelize,Sequelize);
db.vacations = require("../models/vacations_models")(sequelize,Sequelize);
db.request = require("../models/request_moduls")(sequelize,Sequelize);
db.type_contracts = require("../models/type_contracts_models")(sequelize,Sequelize);
db.companies = require("../models/companies_models").default(sequelize,Sequelize);
/* -- Exporta el objeto db para que pueda ser utilizado en otros archivos -- */

/* -- Establece la relación uno a uno entre user y persons -- */
db.user.hasOne(db.persons, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

db.user.hasOne(db.persons, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
});
db.user.hasOne(db.persons, {
  foreignKey: 'contract_id',
  onDelete: 'CASCADE'
});
db.user.hasOne(db.persons, {
  foreignKey: 'asistence_id',
  onDelete: 'CASCADE'
});

db.persons.belongsTo(db.user,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
db.user.hasOne(db.persons, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = db;