import jwt from 'jsonwebtoken'
export class AuthMiddlewire {
  static Authorization = (request, response, next) => {
    const Authorization = request.get('authorization')
    let token = ''

    if (Authorization && Authorization.toLowerCase().startsWith('bearer')) {
      token = Authorization.substring(7)
    }
    console.log(token)
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    console.log(decodedToken)
    if (!token || !decodedToken.userToken.id) {
      return response.status(401).json({ error: 'token invalido o ha expirado' })
    }
    const { id: userId } = decodedToken.userToken
    request.userId = userId
    console.log(userId)
    next()
  }
}
