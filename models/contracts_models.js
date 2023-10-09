module.exports = (sequelize,Sequelize)=>{

    const contracts = sequelize.define("constracts",{

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        salary:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        contract_type:{
            type: Sequelize.STRING(50),
            allowNull: false
        }
    })
    return contracts
}