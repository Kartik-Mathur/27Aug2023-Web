const path = require('path');
const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo-controller');
router.get('/',todoController.getTask);

// '/addtask', body: {task: taskname}
router.post('/addtask',todoController.postAddTask);

// '/increasepriority', query: {name: taskname}
// router.get('/increasepriority',todoController.getIncreasePriority);

// '/decreasepriority', query: {name: taskname}
// router.get('/decreasepriority',todoController.getDecreasePriority);

// '/deletetask', query: {name: taskname}
// router.get('/deletetask',todoController.getDeleteTask);

module.exports=router;