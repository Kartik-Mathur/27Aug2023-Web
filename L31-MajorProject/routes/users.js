const path = require('path');
const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getIndex);
router.get('/signin', userController.getSignIn);
router.get('/signup', userController.getSignUp);

module.exports=router;