import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Server Running Successfully!</h1>`);
});

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.listen(PORT, console.log(`Server up on Port: ${PORT}`));
