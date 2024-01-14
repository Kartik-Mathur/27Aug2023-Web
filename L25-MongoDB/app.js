const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'')));

app.use('/',require('./routes/todoroutes'));

const mongoConnect = require('./connections/database');
mongoConnect.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})