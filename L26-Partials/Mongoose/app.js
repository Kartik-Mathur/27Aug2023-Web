const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

require('dotenv').config()
app.set('view engine', 'hbs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/todoRoutes'));

app.use((req,res,next)=>{
    res.render('error');
})

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err=>{
        console.log(err);
    })
