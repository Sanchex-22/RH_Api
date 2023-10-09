/*-- Exporta una función que define y devuelve el modelo del rol --*/
module.exports = (sequelize, Sequelize) => {

    /*-- Define el modelo de información de usuario con el nombre "persons" --*/
    const persons = sequelize.define("persons",{

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true, // Opcional dependiendo de tus necesidades
            references: {
                model: 'users', // Nombre de la tabla a la que hace referencia
                key: 'id', // Nombre de la clave primaria en la tabla persons
            },
        },
        identification:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        second_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        second_lastname: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nacionality: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
    });

    return persons;
};