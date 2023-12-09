const path = require('path');
const express = require('express');
const router = express.Router();

const studentsController = require('../controller/students');

router.get('/',studentsController.getStudent);
router.get('/gettimetable',studentsController.getTimeTable);


module.exports=router;