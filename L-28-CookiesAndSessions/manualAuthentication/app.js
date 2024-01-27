const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.use(session({
    secret: 'asjkdbjaskdb asasdkasd',
    resave: false,
    saveUninitialized: true
}))

app.use(async(req,res,next)=>{
    if(req.session.username){
        req.user = await User.findOne({username: req.session.username});
    }
    next();
})

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if(!user){
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    // Store hash in your password DB.
                    User.create({username,password: hash})
                });
            });
            res.redirect('/login');
        }
        else{
            res.render('signup',{
                msg: 'User is already present',
                username,
                password
            })
        }
    }
    catch (err) {
        // res.render('error',{
        //     msg: err.message
        // })
    }
})

app.get('/login',(req,res)=>{
    if(req.session.username) return res.redirect('/profile');
    res.render('login');
})

app.post('/login',async (req,res)=>{
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if(!user){
            res.render('login',{
                msg: 'Invalid username',
                username,
                password
            })
        }
        else{
            bcrypt.compare(password, user.password, function(err, result) {
                if(result) {
                    req.session.username = username;
                    return res.redirect('/profile');
                }
                res.render('login',{
                    msg: 'Invalid password',
                    username,
                    password
                })
            });
        }
    }
    catch (err) {
        // res.render('error',{
        //     msg: err.message
        // })
    }
})

app.get('/profile',(req,res)=>{
    console.log(req.session);
    if(!req.session.username) return res.redirect('/login');
    res.render('profile',{
        username: req.user.username,
        password: req.user.password
    });
})

mongoose.connect('mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
