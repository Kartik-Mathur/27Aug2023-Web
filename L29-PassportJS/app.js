const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const PORT = 3000;
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');
const User = require('./model/user');
const MongoStore = require('connect-mongo');
app.set('view engine', 'hbs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'asdasfasfsarfrasdaed asdasfd',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority' })
}));
require('dotenv').config();
const passport = require('./utils/passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });

        if (!user) {
            let saltRounds = 10;
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    // Store hash in your password DB.
                    User.create({ username, password: hash })
                });
            });
            res.redirect('/login');
        }
        else {
            res.render('signup', {
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

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });

app.get('/profile', (req, res) => {
    console.log(req.user);
    if (!req.user) return res.redirect('/login');
    res.render('profile', {
        username: req.user.username,
        password: req.user.password,
        AT: req.user.FB_AccessToken,
        FB_ID: req.user.FB_ID
    })
})

app.get('/auth/facebook',
    passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/profile');
    });

mongoose.connect('mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
