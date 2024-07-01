class ApiError extends Error {
  constructor(status, message, errors = []) {
    super(message)
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors)
  }

  static AuthorizationError() {
    return new ApiError(401, 'Ошибка авторизации')
  }

  static Forbidden() {
    return new ApiError(403, 'Доступ запрещен')
  }

  static NotFound() {
    return new ApiError(404, 'Данные не найдены')
  }

  static Internal(message) {
    return new ApiError(500, message)
  }
}

export default ApiError