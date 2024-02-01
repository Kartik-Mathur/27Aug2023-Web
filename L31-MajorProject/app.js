const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',require('./routes/users'));


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});