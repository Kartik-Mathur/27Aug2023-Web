const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/user');
router.get('/',userController.getFoods);


module.exports=router;