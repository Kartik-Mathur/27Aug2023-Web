const path = require('path');
const express = require('express');
const router = express.Router();

const appController = require('../controller/appcontroller');
router.get('/',appController.getIndex);
router.get('/products',appController.getProducts);


module.exports=router;