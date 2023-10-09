module.exports = (sequelize, Sequelize) => {

    const type_contracts = sequelize.define("type_contracts",{

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contract_name:{
            type: Sequelize.STRING(50),
            allowNull: false
        }
    })
    return type_contracts
}