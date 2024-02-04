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
router.get('/products', isLoggedIn, userController.getProducts);
router.get('/addtocart', isLoggedIn, userController.getAddToCart);
router.get('/cartnumber', isLoggedIn, userController.getCartNumber);
module.exports = router;