require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT} = process.env;
const app = express();

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));