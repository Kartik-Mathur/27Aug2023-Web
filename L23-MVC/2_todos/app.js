const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');


app.set('view engine','hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',require('./routes/routes'));

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});