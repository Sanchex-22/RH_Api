import express from 'express'
// import { sessionMiddleware } from './src/middleware/session_mw'
import { corsMiddleware } from './src/middleware/cors_mw.mjs'
// import userrouter from './src/routes/user_routes'
import dbconnection from './utils/dbconnection_util'
// const bodyParser = require('body-parser')
// import cookieSession from 'cookie-session'

const app = express()

// app.use(sessionMiddleware)
app.use(corsMiddleware)
app.use(dbconnection)

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json({ limit: '10mb' }))

// app.get('/', (req, res) => { res.send('Hola desde la RH_API') })
// app.use('/api/user', userrouter)

// Define el puerto por defecto si no está definido en las variables de entorno
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  // Este bloque intenta autenticar la conexión a la base de datos cuando se inicia el servidor
  try {
    await dbconnection.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
  console.log(`Server is running on port ${PORT}.`)
})
