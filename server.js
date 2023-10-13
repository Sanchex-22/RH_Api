import express from 'express'
// import { sessionMiddleware } from './src/middleware/session_mw'
import { corsMiddleware } from './src/middleware/cors_mw.js'
import sequelize from './config/db_config.mjs'
// import userrouter from './src/routes/user_routes'

// const bodyParser = require('body-parser')
// import cookieSession from 'cookie-session'

const app = express()

// app.use(sessionMiddleware)
app.use(corsMiddleware)
async function checkDatabaseConnection () {
  try {
    await sequelize.authenticate()
    console.log('Conexión a la base de datos MySQL establecida correctamente.')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}

checkDatabaseConnection()
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json({ limit: '10mb' }))

// app.get('/', (req, res) => { res.send('Hola desde la RH_API') })
// app.use('/api/user', userrouter)

// Define el puerto por defecto si no está definido en las variables de entorno
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`)
})
