function Person(name,age,course){
    console.log(this);
    console.log("Name:",name,", Age:",age,", Course:",course);
}

let obj = {a:1,b:true}

let f = Person.bind(obj,"Aditya");
// bind should return a function that can be called later on

f(20,"WebDev");