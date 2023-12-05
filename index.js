require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true}));

app.use(router);

app.listen(port, () => {
  console.log(`Dino REST API is running on http://localhost:${port}`);
});