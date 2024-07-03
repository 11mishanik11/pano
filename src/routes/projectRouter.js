import {Router} from "express";
import validationSchemes from "../utils/ValidationSchemes/ValidationSchemes.js";
import projectController from "../controllers/projectController.js";

const router = Router();

router
.post('/', projectController.create)

export default router;