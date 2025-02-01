import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().users;

//Adding user to db
export const addUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userClient.create({
      data: userData,
    });

    res.json({ data: user, message: "User added successfully" }).status(201);
  } catch (error) {
    console.log(`Error adding user: ${error}`);
  }
};
