import { PrismaClient } from "@prisma/client";

const taskClient = new PrismaClient().tasks;

//Add Tasks to a particular user
export const addTaskToUser = async (req, res) => {
  try {
    const { taskTitle, taskDescription, userId } = req.body;
    const taskData = { taskTitle, taskDescription, userId };

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

    res.json({ message: "Task added successfully", data: task }).status(201);
  } catch (error) {
    console.log(`Error adding task: ${error}`);
  }
};

//Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const { userId } = req.params.id;
    const tasks = await taskClient.findMany({
      where: {
        userId: userId,
      },
    });
    res.json({ data: tasks }).status(200);
  } catch (error) {
    console.log(error);
  }
};
