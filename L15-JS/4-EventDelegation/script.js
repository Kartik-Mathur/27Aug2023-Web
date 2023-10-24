// let items = document.querySelectorAll('.item');

// for(let i = 0 ; i < items.length ; i++){
//     items[i].addEventListener('click',(ev)=>{
//         console.log(ev.target.innerText);
//     })
// }

// Event DELEGATION
let container = document.querySelector('.container');

container.addEventListener('click',(ev)=>{
    // console.log(ev.target.getAttribute('class'));
    if(ev.target.getAttribute('class') === 'item'){
        console.log(ev.target.innerText);
    }
})