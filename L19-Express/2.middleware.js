const express = require('express');
const app = express();
const PORT = 5555;

// General Middleware
/*
app.use((req,res,next)=>{
    console.log("Running Middleware-1");
    next();
})

app.use((req,res,next)=>{
    console.log("Running Middleware-2");
    next();
})
*/

const middleWareFuncs = require('./utils/middleware');
app.use(middleWareFuncs.func1);
app.use(middleWareFuncs.func2);
app.use('/hi',middleWareFuncs.func3);
// /hi, /hi/greetings, /hi/....../something
// Nahi chlega for /hi1, /higreetings

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/hi/greetings',(req,res)=>{
    res.send("Good Morning")
})


app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
});
