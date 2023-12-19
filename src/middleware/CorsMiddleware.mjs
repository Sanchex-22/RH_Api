import cors from 'cors'

const corsMiddleware = cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: ['http://localhost:5173', 'http://0.0.0.0:5173', 'http://192.168.0.77:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
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
