// NOT RELATED TO APP
// JUST TO EXPLAIN THE CLASSES PART
class Tasks{
    constructor(){
        this.todos = [];
    }

    addTask(name){
        this.todos.push(name);
    }

    getTask(){
        return this.todos;
    }

    static sayHello(){
        console.log("Hello");
    }
}

let t = new Tasks();
let t1 = new Tasks();

t.addTask("Coding");
t.addTask("Sing");
console.log(t);
console.log(t1);

Tasks.sayHello();