// * import dependencias
import express from 'express'
import session from 'express-session'

// * import Middleware
import bodyParser from 'body-parser'
import { corsMiddleware } from './src/middleware/CorsMiddleware.mjs'

// * import Routes
import userRouter from './src/routes/userRoutes.mjs'
import authRoutes from './src/routes/AuthRoutes.mjs'

// * import Util/Config
import { checkDatabaseConnection } from './config/dbConfig.mjs'

const app = express()

// * Middleware
app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
}))
app.use(corsMiddleware)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

// * Connection to DB
checkDatabaseConnection()

// * Routes
app.get('/', (req, res) => { res.send('Hola desde la RH_API') })
app.use('/Api/User', userRouter)
app.use('/Api/Auth', authRoutes)

// * Start Server
const PORT = process.env.PORT || 3001
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`)
})
