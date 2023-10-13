module.exports = (sequelize, Sequelize) => {

    const permisions = sequelize.define("permisions",{

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

    })
    return permisions
}