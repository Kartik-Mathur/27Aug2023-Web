let btn = document.querySelector('#btn');
let task = document.querySelector('#task');
let taskList = document.querySelector('.taskList');

function updateList(tasks){
    taskList.innerHTML = '';
    tasks.forEach((t)=>{
        let li = document.createElement('li');
        li.classList.add('taskListItem');

        li.innerHTML = `
            <span class="taskName">${t}</span>
            <button class="deleteBtn btn">❌</button>
            <button class="downBtn btn">↓</button>
            <button class="upBtn btn">↑</button>
        `
        taskList.appendChild(li);
    })
}

function initialiseList(){
    axios.get(`/gettasks`)
    .then((data)=>{
        data = data.data;
        updateList(data);
    })
    .catch(err=>{
        alert(err);
    })
}

initialiseList();

btn.addEventListener('click',(ev)=>{
    axios.get(`/addtask?task=${task.value}`)
        .then((data)=>{
            data = data.data;
            updateList(data);
        })
        .catch(err=>{
            alert(err);
        })
})

taskList.addEventListener('click',(ev)=>{
    // console.log(ev.target.classList);
    if(ev.target.classList.contains('deleteBtn')){
        let taskName = ev.target.previousElementSibling.innerText;
        axios.get(`/deletetask?task=${taskName}`)
            .then((data)=>{
                data = data.data;
                updateList(data);
            })
            .catch(err=>{
                alert(err);
            })
    }
    else if(ev.target.classList.contains('upBtn')){
        let taskName = ev.target.parentElement.children[0].innerText;
        console.log(taskName);
        axios.get(`/increasepriority?name=${taskName}`)
            .then((data)=>{
                console.log(data.data)
                data = data.data;
                updateList(data);
            })
            .catch(err=>{
                alert(err);
            })
    }
    else if(ev.target.classList.contains('downBtn')){
        let taskName = ev.target.parentElement.children[0].innerText;
        console.log(taskName);
        axios.get(`/decreasepriority?name=${taskName}`)
            .then((data)=>{
                data = data.data;
                updateList(data);
            })
            .catch(err=>{
                alert(err);
            })
    }

})