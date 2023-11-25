const express = require('express');
const app = express();
const PORT = 4444;

app.get('/hi/:name/:city',(req,res)=>{
    console.log(req.params);
    res.send(`Hello ${req.params.name} from ${req.params.city}`);
})

app.get('/bye',(req,res)=>{
    console.log(req.query)
    const {name, city} = req.query;
    res.send(`Bye ${name}, ${city}`);
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});