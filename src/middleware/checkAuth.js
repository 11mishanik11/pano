import tokenService from "../services/tokenService.js";
import ApiError from "../utils/ApiError/ApiError.js";

const checkAuth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) {
      return next(ApiError.AuthorizationError());
    }

    const decoded = tokenService.validateAccessToken(accessToken);
    req.user = decoded
    next()
  } catch (e) {
    next(ApiError.AuthorizationError())
  }
}

export default checkAuth