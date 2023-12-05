const express = require('express');
const mainController = require('./controllers/mainController');


const router = express.Router();

router.get('/home', mainController.showHomePage);


module.exports = router;