import express from "express";
import userRouter from "./userRouter.js";
import projectRouter from "./projectRouter.js";

const router = express.Router();

router.use('/user', userRouter);
router.use('/project', projectRouter);

export default router