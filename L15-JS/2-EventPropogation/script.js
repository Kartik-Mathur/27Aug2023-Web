let grandFather = document.querySelector('.grandFather');
let father = document.querySelector('.father');
let child = document.querySelector('.child');


grandFather.addEventListener('click',(ev)=>{
    console.log("Dadaji aapke paute ne kaand kia hai"); 
}, true)

father.addEventListener('click',(ev)=>{
    console.log("Belt se seva ki gai");
}, false)

child.addEventListener('click',(ev)=>{
    console.log("Last time jaane do, ab nahi krunga");
    ev.stopPropagation();
}, true)
