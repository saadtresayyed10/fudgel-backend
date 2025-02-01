import { Router } from "express";
import { addTaskToUser, getAllTasks } from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.post("/", addTaskToUser);
taskRouter.get("/", getAllTasks);

export default taskRouter;
