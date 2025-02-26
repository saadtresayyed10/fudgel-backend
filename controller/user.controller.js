import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().users;

//Adding user to db
export const addUser = async (req, res) => {
  try {
    const { userId, firstName, lastName, email } = req.body;
    const userData = { userId, firstName, lastName, email };
    const user = await userClient.create({
      data: userData,
    });

    res.status(201).json({ message: "User added successfully", data: user });
  } catch (error) {
    console.log(`Error adding user: ${error}`);
  }
};

//Fetch all the users from db
export const getAllUsers = async (req, res) => {
  try {
    const users = await userClient.findMany();

    res.status(200).json({ message: "All users are fetched", data: users });
  } catch (error) {
    console.log(`Error adding user: ${error}`);
  }
};
