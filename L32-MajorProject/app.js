const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');


require('dotenv').config();

app.use(require('express-session')(
    {
        secret: 'asdasfasfa adad',
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
    }
));

hbs.registerPartials(__dirname + '/views/partials');


// console.log(process.env)

const passport = require('passport');
require('./passport/passport');
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/profile');
    });

const checkIsAdmin = require('./middleware/checkIsAdmin');
app.use('/', require('./routes/users'));
app.use('/admin',checkIsAdmin,require('./routes/admin'));

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
    .catch(err => {
        console.log(err);
    })
