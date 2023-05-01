import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import uploadRoutes from './routes/uploadRoutes.js';
import exampleRoutes from './routes/exampleRoutes.js';
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(uploadRoutes);
app.use(exampleRoutes);
dotenv.config();

app.listen(8500, () => {
    console.log("Applikácia beží na porte 8500");
})