import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";
import exampleRoutes from "./routes/exampleRoutes.js";
import morgan from "morgan";
import chalk from "chalk";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(uploadRoutes);
app.use(exampleRoutes);

dotenv.config();

const PORT = process.env.PORT || 8500;

app.listen(PORT, () => {
  console.log(chalk.blue(`Applikácia beží na porte ${PORT}`));
});
