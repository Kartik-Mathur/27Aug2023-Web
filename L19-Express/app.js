const express = require('express');
const app = express();
const PORT = 5555;

// GET, path: '/'
// Iska mtlb yeh hai ki agar GET request aati hai
// on path: '/', toh hum kya krenge
app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/greetings',(req,res)=>{
    res.send("Good Morning")
})

// let catFacts = [
//     {name:'Kitty',fact:"1 kg doodh pee gai"},
//     {name:'Kutta',fact:"2 kg doodh pee gai"},
//     {name:'Meow',fact:"Nakhrey hai, 1 kg doodh peene mei"}
// ]

// app.get('/catfacts',(req,res)=>{
//     res.send(catFacts);
// })

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
});
