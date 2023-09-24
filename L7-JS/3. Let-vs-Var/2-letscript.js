// let ka scope hota hai lexical scope
// console.log(x);

let x = 20;
function fun(){
    console.log(x);
    x = 10;
    console.log(x);
}

fun();

console.log(x);

/*
{
    var x;
    console.log(x);
    x = 10;
}

console.log(x);
*/

/*
{
    let x;
    console.log(x);
    x = 10;
}

console.log(x);
*/