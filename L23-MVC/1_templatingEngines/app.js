const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));

let todos = ['Hockey','Cricket','Singing','Dancing'];

let personDetails = {
    fname: 'Coding',
    lname: 'Blocks!!'
};

app.get('/',(req,res)=>{
    // res.render('todos',personDetails);
    res.render('todos',{
        todos
    });
})

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// });


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});