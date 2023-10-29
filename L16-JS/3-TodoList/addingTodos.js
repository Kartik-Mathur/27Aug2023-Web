let input = document.querySelector('.inp');
let addTask = document.querySelector('.btn');
let taskList = document.querySelector('.factsList');

let newTaskAdd = ()=>{
    if(input.value.length == 0) return;
    let div = document.createElement('div');
    div.innerHTML = `
            <div class="factItem task">
                <input type="checkbox" name="" class="checkBox">
                <span class="text">${input.value}</span>
            </div>
            <div class="btnGrp">
                <button class="deleteBtn">X</button>
                <button class="downBtn">↓</button>
                <button class="upBtn">↑</button>
            </div>
    `
    div.classList.add('factItemParent')
    input.value = '';

    factsList.appendChild(div); 
}

addTask.addEventListener('click',(ev)=>{
    newTaskAdd();
})

document.querySelector('body').addEventListener('keypress',(ev)=>{
    if(ev.key!=='Enter') return;
    newTaskAdd();
})