import ApiError from "../utils/ApiError/ApiError.js";

const errorHandling = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message, errors: err.errors})
  }
  return res.status(500).json({message: 'Непредвиденная ошибка', errors: err.errors})
}

export default errorHandling