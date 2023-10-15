function Person(name,age,course){
    console.log(this);
    console.log("Name:",name,", Age:",age,", Course:",course);
}

let obj = {a:1,b:true}

Function.prototype.mybind = function(context,...args){
    let myFun = this;
    // myFun = function Person(name,age,course){
    //     console.log(this);
    //     console.log("Name:",name,", Age:",age,", Course:",course);
    // }

    return function(...args1){
        myFun.apply(context,[...args,...args1]);
    }
}

let f = Person.mybind(obj,"Aditya");

f(20,"WebDev");