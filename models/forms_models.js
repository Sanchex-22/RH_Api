module.exports = (sequelize, Sequelize) => {

    const forms = sequelize.define("forms",{

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_forms:{
            type: Sequelize.STRING(50),
            allowNull: false
        }
    })
    return forms
}