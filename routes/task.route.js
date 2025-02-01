import { Router } from "express";
import {
  addTaskToUser,
  getAllTasksForAUser,
} from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.post("/", addTaskToUser);
taskRouter.get("/:userId", getAllTasksForAUser);

export default taskRouter;
