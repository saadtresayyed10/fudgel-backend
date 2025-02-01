import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().users;

//Adding user to db
export const addUser = async (req, res) => {
  try {
    const { userId, username, email } = req.body;
    const userData = { userId, username, email };
    const user = await userClient.create({
      data: userData,
    });

    res.json({ message: "User added successfully", data: user }).status(201);
  } catch (error) {
    console.log(`Error adding user: ${error}`);
  }
};
