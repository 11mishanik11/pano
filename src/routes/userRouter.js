import {Router} from "express";
import userController from "../controllers/userController.js";
import validationSchemes from "../utils/ValidationSchemes/ValidationSchemes.js";
import checkAuth from "../middleware/checkAuth.js";

const router = Router();

router
  .post('/registration',
    [validationSchemes.createUser()],
    userController.registration
  )
  .post('/login',
    userController.login
  )
  .get('/auth',
    checkAuth,
    userController.auth
  )

export default router;