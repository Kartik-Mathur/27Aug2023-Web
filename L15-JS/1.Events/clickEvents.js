let btn = document.querySelector('#btn');
let body = document.querySelector('body');
let nav = document.querySelector('.navbar');

console.log(btn);

// To write handlers in different file, we do this
// btn.addEventListener('click',btnClickHandler);
// body.addEventListener('keypress',keyPressHandler);

btn.addEventListener('click',()=>{
    console.log("Hello");
});

body.addEventListener('keydown',(x)=>{
    console.log("You pressed a key");
    console.log(x);
});

btn.addEventListener('mouseenter',()=>{
    console.log("You are hovering on me");
})

document.addEventListener('scroll',(ev)=>{
    console.log('Scrolled');
    if(window.scrollY>765){
        nav.classList.add('orange');
        nav.classList.remove('white');
    }
    else{
        nav.classList.add('white');
        nav.classList.remove('orange');
    }
})

