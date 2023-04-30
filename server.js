import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import uploadRoutes from './routes/uploadRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(uploadRoutes);
dotenv.config();

app.listen(8500, () => {
    console.log("Applikácia beží na porte 8500");
})