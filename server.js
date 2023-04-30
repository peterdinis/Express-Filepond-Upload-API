const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.listen(8500, () => {
    console.log("Applikácia beží na porte 8500");
})