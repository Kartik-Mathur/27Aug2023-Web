const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))


app.use(session({
    secret: 'sajdasdasbdaskfbabfiab',
    saveUninitialized: true
}))

require('./passport/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/login', passport.authenticate('local',
    {
        failureRedirect: '/login',
        successRedirect: '/profile'
    }))

app.use('/', require('./routes/user'));

mongoose.connect('mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => console.log(err));
