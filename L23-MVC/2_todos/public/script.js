console.log("hello")
const form = document.querySelector('.form');
const list = document.querySelector('.list');
const inp = document.querySelector('.taskname');

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    console.log("Trying to submit form using AJAX");
        axios.post(`/addtask?name=${inp.value}&reqType=xhr`)
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
})
list.addEventListener('click',(ev)=>{
    ev.preventDefault();// This will prevent the default behaviour
    // to occur, aur iske baad we can handle it
    console.log(ev.target);
    // axios.get(`/addtask?name=${taskname}&reqType=xhr`)
    //     .then(data=>{
    //         console.log(data);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    
})