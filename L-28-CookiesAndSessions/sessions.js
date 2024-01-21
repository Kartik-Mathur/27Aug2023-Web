const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');

app.use(session({
    secret: 'asndasdwabdbadbhjaw dahvvwdhvawv',
    resave: false,
    saveUninitialized: true
  }))
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'')));

app.get('/',(req,res)=>{
    if(!req.session.cnt){
        req.session.cnt = 1;
        // req.session.cookie.maxAge = 5000;
        res.send('Welcome For the first time');
    }
    else{
        req.session.cnt++;
        res.send(`Welcome For the ${req.session.cnt} time`);
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});