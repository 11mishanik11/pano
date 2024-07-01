import {validationResult} from "express-validator";
import ApiError from "../utils/ApiError/ApiError.js";

export const checkErrorValidates = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        return next(ApiError.BadRequest('Невалидные данные', result.array()))
    }
    next()
}

