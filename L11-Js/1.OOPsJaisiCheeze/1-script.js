function Person(name,age){
    return function(){
        console.log("Name:",name);
        if(age>18){
            console.log("Baalik hai");
        }
        else{
            console.log("NaBaalik hai");
        }
    }
}

let f  = Person("Aditya",23);
f();