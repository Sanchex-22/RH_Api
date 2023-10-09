module.exports = (sequelize,Sequelize) => {

    const vacations = sequelize.define("vacations",{

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        acumulated_vacation:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
    })
    return vacations
}