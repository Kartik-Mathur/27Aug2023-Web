function fun(a,b,c,...ar){
    console.log(a,b,c,ar);
}

fun(1,2,3,4,5,6,7,8);

let arr = [1,2,3,4];
let arr1 = [5,6,7,8];

let arr2  = [...arr,...arr1];
console.log(arr2);