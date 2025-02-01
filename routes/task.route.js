import { Router } from "express";
import {
  addTaskToUser,
  deleteTask,
  getAllTasksForAUser,
  updateTask,
} from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.post("/", addTaskToUser);
taskRouter.get("/:userId", getAllTasksForAUser);
taskRouter.put("/:taskId", updateTask);
taskRouter.delete("/:taskId", deleteTask);

export default taskRouter;
