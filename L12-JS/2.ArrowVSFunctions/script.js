function hello(){
    console.log(this);
    console.log("hello");
}
let world = ()=>{
    console.log(this);
    console.log("World");
}

let obj = {
    a: 1,
    b: true
}
let obj1 = {
    a: "Hello",
    b: "World"
}

hello.call(obj);// this-->obj
hello.call(obj1);// this--> obj1
world.call(obj);
world.call(obj1);

console.log(hello.prototype);
console.log(world.prototype);
// hello();
// world();

