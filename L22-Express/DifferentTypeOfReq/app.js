const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// This middleware helps us to make body readable
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));
let todos = [
    "Cricket", "Hockey","Dance","Swim"
];

app.get('/todos',(req,res)=>{
    res.send(todos);
})

app.post('/todos',(req,res)=>{
    // console.log(req.body);
    let {task} = req.body;
    console.log(task);
    todos.push(task);
    res.send(todos);
})

app.get('/increasepriority',(req,res)=>{
    let {task} = req.query;
    let indx = todos.indexOf(task);
    let temp = todos[indx];
    todos[indx] = todos[indx-1];
    todos[indx-1] = temp;
    res.send(todos);
})

app.get('/decreasepriority',(req,res)=>{
    let {task} = req.query;
    let indx = todos.indexOf(task);
    let temp = todos[indx];
    todos[indx] = todos[indx+1];
    todos[indx+1] = temp;
    res.send(todos);
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});