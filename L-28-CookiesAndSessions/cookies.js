const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const cookies = require('cookies');
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'')));

app.get('/',(req,res)=>{
    // res.setHeader('Set-Cookie','name=joyeta');
    let cukie = new cookies(req, res);
    cukie.set('role','user',{maxAge: 5000});
    res.send("Hello Welcome");
})

app.get('/aapkaun',(req,res)=>{
    console.log(res)
    // const cookieDetail = res.getHeader('Set-Cookie');
    let cukie = new cookies(req, res);
    let role = cukie.get('role');

    if(role === 'admin') return res.sendFile(path.join(__dirname,'admin.html'));
    if(role === 'superadmin') return res.sendFile(path.join(__dirname,'superadmin.html'));
    res.sendFile(path.join(__dirname,'user.html'));
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});