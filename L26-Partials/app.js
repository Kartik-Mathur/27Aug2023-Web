const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyparser = require('body-parser');
const hbs = require('hbs');
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/cpp',(req,res)=>{
    res.render('cpp');
})

app.get('/java',(req,res)=>{
    res.render('java');
})

app.get('/python',(req,res)=>{
    res.render('python');
})

app.get('/datascience',(req,res)=>{
    res.render('datascience');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});