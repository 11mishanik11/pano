import express from "express";
import usersRouter from "./userRouter.js";
import projectRouter from "./projectRouter.js";

const router = express.Router();

router.use('/users', usersRouter);
router.use('/project', projectRouter);

export default router