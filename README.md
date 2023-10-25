# RH_Api
# codigo para la db config in mysql 

1. **DB CONFIG**

 ```s
    import { config } from 'dotenv'
    config({ path: '../.env' })

    export const dbConfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '12345',
    DB: 'recursoshumanos',
    dialect: 'mysql',
    pool: {
        max: parseInt('8'),
        min: parseInt('0'),
        acquire: parseInt('300000'),
        idle: parseInt('100000')
    }
    }
    export default dbConfig
```

2. **DB CONFIG**

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