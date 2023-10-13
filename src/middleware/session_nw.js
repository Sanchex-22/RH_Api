import session from 'express-session'

export const sessionMiddleware = session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
})
