const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// Mount for /teachers
app.use('/teachers',require('./routes/teachers'));

// Mount for students
let studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});