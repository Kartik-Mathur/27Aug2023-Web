function hello(){
    console.log(this);
    let sum = (a,b)=>{
        console.log("Sum",a+b);
        console.log("Inside Sum",this);
    }
    let obj1 = {
        a: "Hello",
        b: "World"
    }
    sum.call(obj1,10,20);
}
let obj = {
    a: 1,
    b: true
}

hello.call(obj);