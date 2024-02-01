const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const mongoose = require('mongoose');


hbs.registerPartials(__dirname + '/views/partials');

require('dotenv').config();
console.log(process.env)

const passport = require('passport');
require('./passport/passport');

app.use(require('express-session')({ secret: 'asdasfasfa adad', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

app.use('/', require('./routes/users'));

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
    .catch(err => {
        console.log(err);
    })
