const form = document.querySelector('.form');
const list = document.querySelector('.list');
const inp = document.querySelector('.taskname');
const errorMessage = document.querySelector('.error');

function addTaskToList(taskname){
    let li = document.createElement('li');
    li.classList.add('listItem');
    li.innerHTML = `
    <div class="listItemText">${taskname}</div>
                <div class="btnGroup">
                    <button class="upBtn">
                        <a class="up" href="/increasePriority?name=${taskname}">↑</a>
                        <div style="display: none;" class="taskValue">${taskname}</div>
                    </button>
                    <button class="downBtn">
                        <a class="down" href="/decreasePriority?name=${taskname}">↓</a>
                        <div style="display: none;" class="taskValue">${taskname}</div>
                        </button>
                    <button class="delBtn">
                        <a class="delete" href="/deletetask?name=${taskname}">❌</a>
                        <div style="display: none;" class="taskValue">${taskname}</div>
                    </button>
                </div>
    `
    list.appendChild(li);
    inp.value = '';
}
// FORM ke submit hone par AJAX krna hai
// uske liye form ka default behaviour rokna padega
form.addEventListener('submit',async (ev)=>{
    ev.preventDefault();
    // send the post ajax req, {task: taskVal, reqType: ''}
    try{
        let {data} = await axios.post('/addtask',{
            reqType: 'xhr',
            task: inp.value
        })
        console.log(data);
        addTaskToList(data[data.length-1].task);
    }
    catch(err){
        errorMessage.innerHTML = `${err.message}<button class="removeError">❌</button>`;
    }
})

function updateTaskList(data){
    list.innerHTML = '';
    data.forEach(d=>{
        addTaskToList(d);
    })
}

list.addEventListener('click',async (ev)=>{
    ev.preventDefault();
    console.log(ev.target);
    if(ev.target.classList.contains('up')){
        console.log("UP ARROW");
        let taskVal = ev.target.nextElementSibling.innerText;
        console.log(taskVal);
        try{
            let {data} = await axios.get(`/increasepriority?name=${taskVal}&reqType=xhr`);
            console.log(data);
            updateTaskList(data);
        }
        catch(err){
            errorMessage.innerHTML = `${err.message}<button class="removeError">❌</button>`;
        }
        
    }
    else if(ev.target.classList.contains('down')){
        console.log("DOWN ARROW");
        let taskVal = ev.target.nextElementSibling.innerText;
        console.log(taskVal);
        try{
            let {data} = await axios.get(`/decreasepriority?name=${taskVal}&reqType=xhr`);
            console.log(data);
            updateTaskList(data);
        }
        catch(err){
            errorMessage.innerHTML = `${err.message}<button class="removeError">❌</button>`;
        }
    }
    else if(ev.target.classList.contains('delete')){
        console.log("DELETE ARROW");
        let taskVal = ev.target.nextElementSibling.innerText;
        console.log(taskVal);
        try{
            let {data} = await axios.get(`/deletetask?name=${taskVal}&reqType=xhr`);
            console.log(data);
            ev.target.parentElement.parentElement.parentElement.remove();
        }
        catch(err){
            errorMessage.innerHTML = `${err.message}<button class="removeError">❌</button>`;
        }
    }
})

