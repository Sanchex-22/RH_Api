module.exports = (sequelize,Sequelize) =>{

    const department = sequelize.define("department",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dp_name:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        num_employees:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    return department
}