// * import dependencias/config
import express from 'express'
import session from 'express-session'
import { Sequelize } from 'sequelize'
import { createTables } from './src/models/createModels.mjs'
import { dbConfig } from './config/dbConfig.mjs'

// * import Middleware
import bodyParser from 'body-parser'
import { corsMiddleware } from './src/middleware/CorsMiddleware.mjs'

// * import Routes
import userRouter from './src/routes/userRoutes.mjs'
import authRoutes from './src/routes/AuthRoutes.mjs'

// * config connection
export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  }
)

const app = express()

// * Middleware
app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true
  })
)
app.use(corsMiddleware)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

// * Routes
app.get('/', (req, res) => {
  res.send('Hola desde la RH_API')
})
app.use('/Api/User', userRouter)
app.use('/Api/Auth', authRoutes)

async function main () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await createTables()
    console.log('Listo mi rey tus tablas estan listas')
    const PORT = process.env.PORT || 3001
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}.`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

// * Start Server
main()
