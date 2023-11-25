const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;

const Public_Folder = path.join(__dirname,'public');
app.use('/',express.static(Public_Folder));

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});