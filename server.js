import express from 'express'
// import { sessionMiddleware } from './src/middleware/session_mw'
import { corsMiddleware } from './src/middleware/cors_mw.js'
import { sequelize, checkDatabaseConnection } from './config/db_config.js'
// import userrouter from './src/routes/user_routes'
// import authroutes from './src/routes/authentication.js'
// const bodyParser = require('body-parser')
// import cookieSession from 'cookie-session'

const app = express()

// app.use(sessionMiddleware)
app.use(corsMiddleware)
checkDatabaseConnection()

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json({ limit: '10mb' }))

app.get('/', (req, res) => { res.send('Hola desde la RH_API') })
// app.use('/api/user', userrouter)
// app.use('/api/auth', authroutes)

// Define el puerto por defecto si no está definido en las variables de entorno
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`)
})
