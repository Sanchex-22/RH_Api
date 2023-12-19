// * import dependencias/config
import express from 'express'
import session from 'express-session'

// * import Middleware
import bodyParser from 'body-parser'
import { corsMiddleware } from './src/middleware/CorsMiddleware.mjs'

// * import Routes
import userRouter from './src/routes/userRoutes.mjs'
import authRoutes from './src/routes/AuthRoutes.mjs'
import companiesRouter from './src/routes/CompaniesRoutes.mjs'
import departmentRouter from './src/routes/DepartmentRoutes.mjs'
import ContractRouter from './src/routes/ContractRoutes.mjs'
import ContractTypesRouter from './src/routes/ContractTypesRoutes.mjs'
import PositionsRouter from './src/routes/PositionsRoutes.mjs'
import EmployeeRouter from './src/routes/EmployeeRoutes.mjs'
import VacationsRouter from './src/routes/VacationsRoutes.mjs'
import VacationsFormRouter from './src/routes/VacationsFormRoutes.mjs'

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
app.use('/api/user', userRouter)
app.use('/api/auth', authRoutes)
app.use('/api/employee', EmployeeRouter)
app.use('/api/company', companiesRouter)
app.use('/api/department', departmentRouter)
app.use('/api/contract', ContractRouter)
app.use('/api/contractTypes', ContractTypesRouter)
app.use('/api/positions', PositionsRouter)
app.use('/api/vacations', VacationsRouter)
app.use('/api/vacationsForm', VacationsFormRouter)

// * Start Server
const PORT = process.env.PORT || 3001
const HOST = '0.0.0.0'

app.listen(PORT, HOST, async () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})
