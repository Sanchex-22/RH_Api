export default (sequelize, Sequelize) => {
  const companies = sequelize.define("companies", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number_ruc: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        company_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },

    })
    return companies
}