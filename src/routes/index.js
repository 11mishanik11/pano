import express from "express";
import usersRouter from "./userRouter.js";

const router = express.Router();

router.use('/users', usersRouter);

export default router