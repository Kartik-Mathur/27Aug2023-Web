const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

io.on("connection", (socket) => {
    console.log("Hello Welcome");

    socket.on('firstmessage',(data)=>{
        console.log(data);
        socket.emit("msgrecieved",`You have sent ${data}, successfully`);
    })
});

server.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});