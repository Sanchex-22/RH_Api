module.exports = (sequelize,Sequelize) =>{

    const request = sequelize.define("request",{

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_request:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        date:{
            type: Sequelize.DATE,
            allowNull: false
        },
        status:{
            type: Sequelize.STRING(50),
            allowNull: false
        }
    })
    return request
}