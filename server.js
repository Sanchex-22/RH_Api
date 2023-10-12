require('dotenv').config({path: './.env'});
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

const cookieSession = require("cookie-session");
const session = require("express-session");

const sessionMiddleware = session({
  secret: "my-secret",
  resave: false,
  saveUninitialized: true,
});
app.use(sessionMiddleware);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))


app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api')
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


/* -- Rutas -- */
require("./rutas/authentication")(app); 
require("./rutas/user_routes")(app); 