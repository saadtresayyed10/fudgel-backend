import { PrismaClient } from "@prisma/client";

const taskClient = new PrismaClient().tasks;

//Add Tasks to a particular user
export const addTaskToUser = async (req, res) => {
  try {
    const { taskTitle, taskDescription, userId } = req.body;
    const taskData = { taskTitle, taskDescription, userId };

    if (!taskData.taskTitle || !taskData.taskDescription) {
      res
        .status(400)
        .json({ error: "Title and Description fields cannot be left emptied" });
    }

    const task = await taskClient.create({
      data: {
        taskTitle: taskData.taskTitle,
        taskDescription: taskData.taskDescription,
        users: {
          connect: {
            userId: taskData.userId,
          },
        },
      },
    });

    res.status(201).json({ message: "Task added successfully", data: task });
  } catch (error) {
    console.log(`Error adding task: ${error}`);
  }
};

//Get all tasks for a specific user
export const getAllTasksForAUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await taskClient.findMany({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({ data: tasks });
  } catch (error) {
    console.log(error);
  }
};

//Update a Task
export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { taskTitle, taskDescription } = req.body;
    const taskData = { taskTitle, taskDescription };

    const task = await taskClient.update({
      where: {
        taskId: taskId,
      },
      data: taskData,
    });

    res.status(200).json({ message: "Task updated successfully", data: task });
  } catch (error) {
    console.log(error);
  }
};

//Delete a Task
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await taskClient.delete({
      where: {
        taskId: taskId,
      },
    });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
