module.exports = (sequelize,Sequelize)=>{

    const employee_assistance = sequelize.define("employee_assistance.",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        start_date:{
            type: Sequelize.DATE,
            allowNull: false
        },
        end_date:{
            type:Sequelize.DATE,
            allowNull: false
        },
        absences:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    return employee_assistance;
}