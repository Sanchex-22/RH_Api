import session from 'express-session'

const sessionMiddleware = session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
})

export { sessionMiddleware }
