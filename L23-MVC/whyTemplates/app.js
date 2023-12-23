const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'')));

let todos = ['Cricket','Hockey','Singing'];
// 1st way: Client ko kya krna hai data ka
// vo usse handle kr skta hai
// app.get('/',(req,res)=>{
//     res.send(todos);
// })

// 2nd way HTML banao aur usse bhejdo yaha se
app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
            </head>
            <body>
                <ul class="list">
                    <li class="listItem">${todos[0]}</li>
                    <li class="listItem">${todos[1]}</li>
                    <li class="listItem">${todos[2]}</li>
                </ul>
            </body>
        </html>
    `);
})



app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});