const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');


app.use(session({
    secret: 'asndasdwabdbadbhjaw dahvvwdhvawv',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority' })
  }))
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'')));
app.get('/',(req,res)=>{
    res.render('login');
})

app.get('/login',(req,res)=>{
    if(!req.session.name) return res.render('login');
    res.redirect('/profile');
})


app.post('/login',(req,res)=>{
    const {name} = req.body;
    req.session.name = name;
    res.redirect('/profile');
})

app.get('/profile',(req,res)=>{
    if(!req.session.name) return res.redirect('/login');
    res.render('profile',{
        name: req.session.name
    })
})

app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login');
    });
})

mongoose.connect('mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    });
})
