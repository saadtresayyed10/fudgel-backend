import { PrismaClient } from "@prisma/client";

const taskClient = new PrismaClient().tasks;

//Add Tasks to a particular user
export const addTaskToUser = async (req, res) => {
  try {
    const { taskTitle, taskDescription, userId } = req.body;
    const taskData = { taskTitle, taskDescription, userId };

    const task = await taskClient.create({
      data: taskData,
    });

    res.json({ message: "Task added successfully", data: task }).status(201);
  } catch (error) {
    console.log(`Error adding task: ${error}`);
  }
};
