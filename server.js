import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1 textalign="center">Server Running Successfully!</h1>`);
});

app.listen(PORT, console.log(`Server up on Port: ${PORT}`));
