// CODE AFTER HOISTING IS DONE
function fun(){
    console.log("Having fun with JS!");
}
var x;
var f;

fun();
// f();

console.log(x);

x = 10;

f = function(){
    console.log("Hello, I am another fun!");
}
f();

/* // ACTUAL CODE
fun();
f();

console.log(x);

var x = 10;

function fun(){
    console.log("Having fun with JS!");
}

var f = function(){
    console.log("Hello, I am another fun!");
}
*/