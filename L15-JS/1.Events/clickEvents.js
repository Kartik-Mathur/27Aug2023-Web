let btn = document.querySelector('#btn');
let body = document.querySelector('body');

console.log(btn);

// To write handlers in different file, we do this
// btn.addEventListener('click',btnClickHandler);
// body.addEventListener('keypress',keyPressHandler);

btn.addEventListener('click',()=>{
    console.log("Hello");
});

body.addEventListener('keydown',(ev)=>{
    // console.log("You pressed a key");
    console.log(ev.key);
});

btn.addEventListener('mouseenter',()=>{
    console.log("You are hovering on me");
})

body.addEventListener('scroll',(ev)=>{
    console.log(ev);
})