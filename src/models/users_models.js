module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,  
        primaryKey: true,          
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING   
      },  
      email: {  
        type: Sequelize.STRING  
      },  
      password: {  
        type: Sequelize.STRING  
      },
      roles: {  
        type: Sequelize.STRING 
      },
      
    });
    
    return User;
  };

  // sequelize.sync()
  // .then(() => {
  //   console.log('Tabla Users creada con éxito.');
  // })
  // .catch((error) => {
  //   console.error('Error al crear la tabla Users:', error);
  // });