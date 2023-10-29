let factsList = document.querySelector('.factsList');
console.log(factsList);
factsList.addEventListener('click',(ev)=>{
    // console.log(ev.target)
    // console.log(ev.target.classList.contains('upBtn'))
    if(ev.target.classList.contains('upBtn')){
        console.log("Up Button Dabaya");
        let element =  ev.target.parentElement.parentElement;
        let previousElement = element.previousElementSibling;
        factsList.insertBefore(element,previousElement);
    }
    else if(ev.target.classList.contains('downBtn')){
        console.log("Down Button Dabaya");
        let element =  ev.target.parentElement.parentElement;
        let nextElement = element.nextElementSibling;
        factsList.insertBefore(nextElement,element);
    }
    else if(ev.target.classList.contains('deleteBtn')){
        console.log("Delete Button Dabaya");
        let element =  ev.target.parentElement.parentElement;
        element.remove();
    }
    else if(ev.target.classList.contains('checkBox')){
        //  console.log(ev.target)
         let bhai = ev.target.nextElementSibling;
        //  console.log("BHAI " ,bhai)
         bhai.classList.toggle('linethrough');
    }

    // console.log(ev.target)
    // console.log(ev.target.parentElement)
    // console.log(ev.target.parentElement.parentElement)
})