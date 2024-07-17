import ApiError from "../utils/ApiError/ApiError.js";
import tokenService from "../services/tokenService.js";

const checkAuth = (req, res, next) => {
	try {
		console.log(req.headers.authorization)
		const accessToken = req.headers.authorization.split(' ')[1];

		if (!accessToken) {
			return next(ApiError.AuthorizationError())
		}

		const decoded = tokenService.validateAccessToken(accessToken);

		if (decoded === null) {
			return next(ApiError.AuthorizationError())
		}

		req.user = decoded
		next()

	} catch (e) {
		return next(ApiError.AuthorizationError())
	}
}

export default checkAuth