function fun(str, x, y, z) {
    console.log(this)
    console.log(str, x, y, z);
}

let obj = {
    x: 1,
    y: true
}

let obj1 = {
    a: "Hello",
    b: "Coding"
}

// fun();

// Using call to change this
// fun.call(obj);// obj will become "this" inside fun function

// obj1 will become "this" inside fun function
// fun.call(obj1, "Hello World", 1,2,3);

// Using apply to change this
// obj1 will become "this" inside fun function
// fun.apply(obj1, ["Hello World", 1, 2, 3]);

// Using bind to change this: this will not call function immediately
let f = fun.bind(obj,"Hello World",1,2,3);
f(); // Calling alag se krni padegi