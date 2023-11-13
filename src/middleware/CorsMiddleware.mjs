import cors from 'cors'

const corsMiddleware = cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: 'http://localhost:5173', // origin of your application
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Allows cookies to be sent in requests
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
