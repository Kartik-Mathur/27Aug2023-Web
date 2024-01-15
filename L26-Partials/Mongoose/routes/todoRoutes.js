const path = require('path');
const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo');

router.get('/',TodoController.getTodo);

// '/addtask' POST, {task, price}
router.post('/addtask',TodoController.postAddTask);

module.exports=router;