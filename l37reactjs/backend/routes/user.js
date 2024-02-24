const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

// app.get('/profile',);
app.post('/signup', userController.postSignUp);



module.exports=router;