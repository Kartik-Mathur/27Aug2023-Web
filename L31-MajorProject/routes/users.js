const path = require('path');
const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', userController.getIndex);
router.get('/signin', userController.getSignIn);
router.get('/signup', userController.getSignUp);
router.get('/profile', isLoggedIn, userController.getProfile);
router.get('/logout', userController.getLogout);
module.exports = router;