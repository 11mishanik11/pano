import ApiError from "../utils/ApiError/ApiError.js";
import tokenService from "../services/tokenService.js";

const checkRole = (role) => ((req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];

    if (!accessToken) {
      return next(ApiError.AuthorizationError())
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (userData.role !== role) {
      return next(ApiError.Forbidden())
    }

    req.user = tokenService.validateAccessToken(accessToken);
    next()

  } catch (e) {
    return next(ApiError.AuthorizationError())
  }
})

export default checkRole