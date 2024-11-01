require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const rolController = require('./controllers/rolController');

const app = express();

app.use(express.json());

app.use('/api/users', userController);

app.use('/api/rols', rolController);

const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en http:/localhost:${PORT}`));

