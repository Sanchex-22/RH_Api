import { express } from 'express'
import { sessionMiddleware } from './src/middleware/session_nw'
import { corsMiddleware } from './src/middleware/cors_mw.mjs'
import userrouter from './src/routes/user_routes'

const bodyParser = require('body-parser')
const app = express()

// const cookieSession = require("cookie-session")

app.use(sessionMiddleware)
app.use(corsMiddleware)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

// rutas
app.get('/', (req, res) => { res.send('hola desde la RH_API') })
app.use('/api/user', userrouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
