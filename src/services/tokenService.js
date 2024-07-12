import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError/ApiError.js";

class TokenService {
  generateToken (payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS, {expiresIn: '15m'})

    return {
      accessToken,
    }
  }

  validateAccessToken (accessToken) {
    try {
      return jwt.verify(accessToken, process.env.SECRET_ACCESS)
    } catch (e) {
      return ApiError.AuthorizationError()
    }
  }
}

export default new TokenService()