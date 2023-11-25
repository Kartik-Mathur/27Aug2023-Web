let btn = document.querySelector('#btn');
let task = document.querySelector('#task');
let taskList = document.querySelector('.taskList');

function updateList(tasks){
    taskList.innerHTML = '';
    tasks.forEach((t)=>{
        let li = document.createElement('li');
        li.innerText = t;
        taskList.appendChild(li);
    })
}

function initialiseList(){
    axios.get(`/gettasks`)
    .then((data)=>{
        data = data.data;
        updateList(data);
    })
}

initialiseList();

btn.addEventListener('click',(ev)=>{
    axios.get(`/addtask?task=${task.value}`)
        .then((data)=>{
            data = data.data;
            updateList(data);
        })
})