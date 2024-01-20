const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 4444;

app.set('view engine', 'hbs');
require('dotenv').config();

hbs.registerPartials(__dirname + '/views/partials')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/app', require('./routes/approutes'));
app.use('/admin', require('./routes/adminroutes'));
app.use((req,res,next)=>{
    res.render('error');
})
mongoose.connect(process.env.DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
