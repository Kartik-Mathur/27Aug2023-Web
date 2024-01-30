const socket = io();
const btn = document.querySelector('#btn');
const msgDiv = document.querySelector('#msg');

btn.addEventListener('click', (ev) => {
    socket.emit('firstmessage', "Hello World");
})

socket.on('msgrecieved', (msg) => {
    console.log(msg);
    msgDiv.innerText = msg;
    setTimeout(()=>{
        msgDiv.innerText = '';
    },5000);
})