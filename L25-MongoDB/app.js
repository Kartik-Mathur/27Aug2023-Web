const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',require('./routes/todoroutes'));

const {mongoConnect} = require('./connections/database');
mongoConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})