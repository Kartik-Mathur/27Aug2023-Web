const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index',{
        todos
    });
})
let todos = ['Coding','Dance','Sing','Write'];

app.post('/addtask',(req,res)=>{
    const {task} = req.body;
    todos.push(task);
    // Yeh dobara se GET request bhej dega on path: '/'
    res.redirect('/');
    // res.render('index',{
    //     todos
    // });
})

app.get('/increasepriority',(req,res)=>{
    const {name} = req.query;
    let indx = todos.indexOf(name);
    let temp = todos[indx];
    todos[indx] = todos[indx-1];
    todos[indx-1]=temp;
    // res.send("Increase Priority Req recieved"+name)
    res.redirect('/');
})
app.get('/decreasepriority',(req,res)=>{
    const {name} = req.query;
    res.send("Decrease Priority Req recieved"+name)
})

app.get('/deletetask',(req,res)=>{
    const {name} = req.query;
    res.send("Delete Task Req recieved "+name)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});