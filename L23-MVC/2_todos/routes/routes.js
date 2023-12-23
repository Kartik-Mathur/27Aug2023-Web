const path = require('path');
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks');

router.get('/',taskController.getTasks);

// '/addtask', body: {task: taskname}
router.post('/addtask',taskController.postAddTask);

// '/increasepriority', query: {name: taskname}
router.get('/increasepriority',taskController.getIncreasePriority);

// '/decreasepriority', query: {name: taskname}
router.get('/decreasepriority',taskController.getDecreasePriority);

// '/deletetask', query: {name: taskname}
router.get('/deletetask',taskController.getDeleteTask);

module.exports=router;