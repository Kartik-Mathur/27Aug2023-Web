const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/user'));


mongoose.connect('mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
