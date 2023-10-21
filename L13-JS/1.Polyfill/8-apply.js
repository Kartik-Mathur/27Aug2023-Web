function Person(name,age,course){
    console.log(this);
    console.log("Name:",name,", Age:",age,", Course:",course);
}

let obj = {a:1,b:true}

Function.prototype.myApply = function(obj,args){
    // obj = {a:1,b:true}
    let myFun = this;
    obj.fun = myFun;
    // obj ={a:1,b:true,fun:[Function Person]}
    obj.fun(...args);
}

let obj1 = {a:"Hello",b:"World"};
Person.myApply(obj,["Aditya",20,"Web"]);
Person.myApply(obj1,["Manan",10,"C++"]);

// FOR EXPLANATION PURPOSE ONLY
// obj ={
//     a:1,
//     b:true,
//     fun:function Person(name,age,course){
//         console.log(this);
//         console.log("Name:",name,", Age:",age,", Course:",course);
//     }
// }

// obj.fun();