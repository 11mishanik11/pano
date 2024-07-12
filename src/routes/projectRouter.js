import {Router} from "express";
import projectController from "../controllers/projectController.js";

const router = Router();

router
.post('/', projectController.create)

export default router;