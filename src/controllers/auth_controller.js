import db from '../models/database_models'
import { secret } from '../config/authenticationkey'

import { sign } from 'jsonwebtoken'
import { compareSync, hashSync } from 'bcryptjs'

export async function login (req, res) {
  try {
    const user = await _user.findOne({
      where: {
        email: req.body.email
        // password: req.body.password
      }
      // attributes: ['id', 'username', 'email', 'roles', 'password'], // Asegúrate de incluir la contraseña en los atributos
    })

    if (!user) {
      return res.status(404).send({ message: 'Usuario y contraseña incorrectos' })
    }

    const passwordIsValid = compareSync(
      req.body.password,
      user.password
    )
    console.log(passwordIsValid)

    if (!passwordIsValid) {
      return res.status(401).send({
        message: 'Invalid Password!'
      })
    }

    // Generar un token JWT
    const token = sign(
      { id: user.id },
      secret,
      {
        algorithm: 'HS256',
        expiresIn: 86400 // Caducidad del token: 24 horas
      }
    )

    console.log(token)

    return res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      access: token
    })
  } catch (error) {
    return res.status(500).send({ message: 'Error interno del servidor', error })
  }
}

export async function logout (req, res) {
  try {
    req.session = null
    return res.status(200).send({
      message: "You've been signed out!"
    })
  } catch (err) {
    this.next(err)
  }
}

export async function register (req, res) {
  try {
    let { username, email, password, roles, identification, name, last_name, second_name, second_lastname, nacionality } = req.body

    username = username.trim()
    email = email.trim()
    password = password.trim()
    roles = roles === '' ? 'user' : roles
    // formatos
    const namePattern = /^[A-Za-z\s]+$/
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    const cedulaPattern = /^\d{1,2}-\d{3,4}-\d{3,4}$/
    console.log(cedulaPattern)
    console.log(req.body)
    if (!namePattern.test(name)) {
      return res.status(404).send({ message: 'el nombre no debe ser un numero' })
    }
    if (!namePattern.test(last_name)) {
      return res.status(404).send({ message: 'el apellido no debe ser un numero' })
    }
    if (!namePattern.test(second_name)) {
      return res.status(404).send({ message: 'el segundo nombre no debe ser un numero' })
    }
    if (!namePattern.test(second_lastname)) {
      return res.status(404).send({ message: 'el segundo apellido no debe ser un numero' })
    }
    if (!cedulaPattern.test(identification)) {
      return res.status(404).send({ message: 'La cedula debe tener el formato (00-0000-0000)' })
    }
    if (!passwordPattern.test(password)) {
      return res.status(404).send({ message: 'La contraseña debe contener al menos 8 caracteres, 1 letra mayúscula y 1 número.' })
    }
    if (!email.endsWith('@gmail.com')) {
      return res.status(404).send({ message: 'El correo electrónico debe tener una terminación en "@gmail.com".' })
    }
    const existingUser = await _user.findOne({ where: { username } })
    if (existingUser) {
      return res.status(400).send({ message: 'Ya existe un usuario con este nombre de usuario.' })
    }
    // const existingUserEmail = await User.findOne({ where: { email } });
    // if (existingUserEmail) {
    //   return res.status(400).send({ message: 'Ya existe un usuario con este correo electrónico.' });
    // }

    const user = await User.create({
      username,
      email,
      password: hashSync(password, 8),
      roles
    })

    const persons = await user.createPerson({
      name,
      last_name,
      user_id: user.id,
      company_id: user.id,
      contract_id: user.id,
      asistence_id: user.id,
      second_name,
      second_lastname,
      nacionality,
      identification
    })
    // await user.setPerson(person);

    res.status(201).send({ message: 'Usuario registrado con éxito!' })
  }
  catch (error) {
    res.status(500).send({ message: "Error interno del servidor", error })
  }
}
