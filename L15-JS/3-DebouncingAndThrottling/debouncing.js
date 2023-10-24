let btn = document.querySelector('#btn');

function debounce(fun, delay) {
    let id;
    return (ev) => {
        // console.log("Abhi Pehle wali id: ",id)
        clearTimeout(id);
        id = setTimeout(() => {
            fun(ev)
        }, delay)
    }
}

function clickHandler(ev) {
    // console.log(ev)
    console.log("Clicked");
}

function throttling(fun,delay) {
    let funcCallHua = false;
    return (ev) => {
        if(!funcCallHua){
            funcCallHua = true;
            setTimeout(()=>{
                fun(ev);
                funcCallHua = false;
            }, delay);
        }
    }
}



btn.addEventListener('click', throttling(clickHandler,2000));