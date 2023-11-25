const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;

app.get('/',(req,res)=>{
    const File = path.join(__dirname,'index.html');
    res.sendFile(File);
});

app.get('/style.css',(req,res)=>{
    const File = path.join(__dirname,'style.css');
    res.sendFile(File);
})
app.get('/script.js',(req,res)=>{
    const File = path.join(__dirname,'script.js');
    res.sendFile(File);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});