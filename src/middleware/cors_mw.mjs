import cors from 'cors'

const corsMiddleware = cors({
  origin: 'http://localhost:3000', // origen de tu aplicación
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Permite el envío de cookies en las solicitudes
})

export { corsMiddleware }
/*
 require('dotenv').config({ path: './.env' })

app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, Accept'
    )
    next()
  })
*/
