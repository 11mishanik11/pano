import tokenService from "../services/tokenService.js";
import ApiError from "../utils/ApiError/ApiError.js";

const checkAuth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];

    if (!accessToken) {
      return next(ApiError.AuthorizationError())
    }

    req.user = tokenService.validateAccessToken(accessToken);
    next()

  } catch (e) {
    return next(ApiError.AuthorizationError())
  }
}

export default checkAuth