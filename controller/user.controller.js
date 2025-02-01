import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().users;

//Adding user to db
export const addUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userClient.create({
      data: userData,
    });

    res.json({ message: "User added successfully", data: user }).status(201);
  } catch (error) {
    console.log(`Error adding user: ${error}`);
  }
};
