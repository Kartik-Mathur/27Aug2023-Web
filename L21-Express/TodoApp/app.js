const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;

const Public_Folder = path.join(__dirname,'public');
app.use('/',express.static(Public_Folder));

let arr = [
    "Coding",
    "Cricket",
    "Dance",
    "Sing",
    "Play"
];

// GET: /addtask?task=task_name
app.get('/addtask',(req,res)=>{
    const {task} = req.query;
    arr.push(task);
    res.send(arr);
})
// GET: /gettasks
app.get('/gettasks',(req,res)=>{
    res.send(arr);
})

// GET: /increasepriority?name=task_name
app.get('/increasepriority',(req,res)=>{
    const {name} = req.query;
    let indx = arr.indexOf(name);
    let temp = arr[indx-1];
    arr[indx-1] = arr[indx];
    arr[indx] = temp;
    res.send(arr);
})

// GET: /decreasepriority?name=task_name
app.get('/decreasepriority',(req,res)=>{
    const {name} = req.query;
    let indx = arr.indexOf(name);
    let temp = arr[indx+1];
    arr[indx+1] = arr[indx];
    arr[indx] = temp;
    res.send(arr);
})

app.get('/deletetask',(req,res)=>{
    const {task} = req.query;
    let newArr = arr.filter((e,indx,arr)=>{
        if(e === task) return false;
        return true;
    })
    arr = newArr;
    res.send(arr)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});