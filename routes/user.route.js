import { Router } from "express";
import { addUser, getAllUsers } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.post("/", addUser);
userRouter.get("/", getAllUsers);

export default userRouter;
