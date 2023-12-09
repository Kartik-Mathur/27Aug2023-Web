const path = require('path');
const express = require('express');
const router = express.Router();

const teachersController = require('../controller/teachers');
router.get('/',teachersController.getTeachers);
router.get('/gettimetable', teachersController.getTimeTable);
router.post('/updatetimetable', teachersController.postUpdateTimeTable);

module.exports=router;