import jwt from "jsonwebtoken";

class TokenService {
  generateToken (payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})

    return {
      accessToken,
    }
  }

  validateAccessToken (accessToken) {
    try {
      return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    } catch (e) {
      return null
    }
  }
}

export default new TokenService()