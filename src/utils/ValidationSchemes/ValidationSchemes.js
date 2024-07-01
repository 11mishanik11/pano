import {checkSchema} from "express-validator";

class ValidationSchemes {
    // Валидация данных юзера
    createUser() {
        return checkSchema({
            email: {
                isEmail: true,
                errorMessage: 'Invalid email',
            },
            password: {
                isString: true,
                isLength: {
                    options: {min: 8},
                    errorMessage: 'Password should be at least 8 chars',
                },
            }
        })
    }
}

export default new ValidationSchemes()