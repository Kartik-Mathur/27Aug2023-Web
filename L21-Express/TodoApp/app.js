const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;
const Todo = require('./utils/dataHelper');

const Public_Folder = path.join(__dirname, 'public');
app.use('/', express.static(Public_Folder));

let arr = [
    "Coding",
    "Cricket",
    "Dance",
    "Sing",
    "Play"
];

// GET: /addtask?task=task_name
/*
app.get('/addtask',(req,res)=>{
    const {task} = req.query;
    arr.push(task);
    res.send(arr);
})
*/

app.get('/addtask', (req, res) => {
    const { task } = req.query;
    Todo.addTask(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
})


// GET: /gettasks
/*
let someFunction = (req,res,next)=>{
    console.log("hello!!!!!!!");
    next();
};

app.get('/gettasks',someFunction,(req,res)=>{
    res.send(arr);
})
*/

app.get('/gettasks', (req, res) => {
    Todo.getTask()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
})

// GET: /increasepriority?name=task_name
/*
app.get('/increasepriority', (req, res) => {
    const { name } = req.query;
    let indx = arr.indexOf(name);
    let temp = arr[indx - 1];
    arr[indx - 1] = arr[indx];
    arr[indx] = temp;
    res.send(arr);
})
*/
app.get('/increasepriority', (req, res) => {
    const { name } = req.query;
    Todo.increasePriority(name)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
})

// GET: /decreasepriority?name=task_name
/*
app.get('/decreasepriority', (req, res) => {
    const { name } = req.query;
    let indx = arr.indexOf(name);
    let temp = arr[indx + 1];
    arr[indx + 1] = arr[indx];
    arr[indx] = temp;
    res.send(arr);
})
*/
app.get('/decreasepriority', (req, res) => {
    const { name } = req.query;
    Todo.decreasePriority(name)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
})

// GET: /deletetask?task=task_name
/*
app.get('/deletetask',(req,res)=>{
    const {task} = req.query;
    let newArr = arr.filter((e,indx,arr)=>{
        if(e === task) return false;
        return true;
    })
    arr = newArr;
    res.send(arr)
})
*/

app.get('/deletetask', (req, res) => {
    const { task } = req.query;
    Todo.deleteTask(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});