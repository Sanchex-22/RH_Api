# RH_Api
# codigo para la db config in mysql 

1. **ENV VARIABLES**

 ```s
    PORT=3001
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD='{your password}'
    DB_NAME=recursoshumanos
    DB_DIALECT=mysql   
    DB_POOL_MAX=8
    DB_POOL_MIN=0
    DB_POOL_ACQUIR=30000
    DB_POOL_IDLE=10000
    API_URL=http://localhost:3001
 ```

2. **DB CONFIG .ENV**

 ```s
    import 'dotenv/config'

    export const dbConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    pool: {
        max: parseInt(process.env.DB_POOL_MAX),
        min: parseInt(process.env.DB_POOL_MIN),
        acquire: parseInt(process.env.DB_POOL_ACQUIRE),
        idle: parseInt(process.env.DB_POOL_IDLE)
    }
    }
    export default dbConfig
```

3. **SEQUELIZE CONFIG**

 ```s
    import config from '../../config/dbConfig.mjs'
    /* -- Importa la biblioteca Sequelize para la administración de la base de datos -- */
    import { Sequelize } from 'sequelize'

    const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
        }
    }
    )
    console.log(sequelize)
    export default sequelize
```

3. **ENDPOINTS**
## API Endpoints
<div>

| Methods |             Urls           |                Actions 
|-------------|:--------------------------:|-----------------------------------:|
| **POST**    | /api/auth/login           | login an account




</div>