module.exports = (sequelize, Sequelize) => {

    /* -- Define el modelo de usuario con el nombre "users" -- */
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,   // Campo "id" de tipo INTEGER en la tabla de la base de datos
        primaryKey: true,           // Indica que este campo es la clave primaria de la tabla
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING   // Campo "username" de tipo STRING en la tabla de la base de datos
      },  
      email: {  
        type: Sequelize.STRING   // Campo "email" de tipo STRING en la tabla de la base de datos
      },  
      password: {  
        type: Sequelize.STRING   // Campo "password" de tipo STRING en la tabla de la base de datos
      },
      // request_id: {  
      //   type: Sequelize.INTEGER   // Campo "password" de tipo STRING en la tabla de la base de datos
      // },
      roles: {  
        type: Sequelize.STRING   // Campo "password" de tipo STRING en la tabla de la base de datos
      },
      
    });
    
    return User;   // Devuelve el modelo de usuario ("users") definido
  };

  // sequelize.sync()
  // .then(() => {
  //   console.log('Tabla Users creada con éxito.');
  // })
  // .catch((error) => {
  //   console.error('Error al crear la tabla Users:', error);
  // });