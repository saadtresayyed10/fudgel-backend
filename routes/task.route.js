import { Router } from "express";
import { addTaskToUser } from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.post("/", addTaskToUser);
