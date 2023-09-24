let obj = {
    a: 'Hello',
    b: 5,
    c: true
}

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj["c"]);

let obj1 = {
    "Coding blocks": 'C++, Java, Python',
    "a": true,
    "": 'Empty String',
    " ": "Space"
}

console.log(obj1["Coding blocks"]);
// console.log(obj1.Coding Blocks);// invalid
console.log(obj1[""]);
console.log(obj1[" "]);

// LOOP over OBJECT
for(let k in obj){
    console.log(k, " : ",obj[k]);
}


// ARRAYS : Hetrogeneous
let arr = ["Hello", 1, 2, true];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]); 

// for(let i = 0 ; i < arr.length ; i++){
// for (let i = 0; i < arr["length"]; i++) {
//     console.log(arr[i]);
// }

for(let e of arr){
    console.log(e);
}

// INSERT AND DELETE IN ARRAY, START AND END
arr.push('Element');
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(1); // Shuru mei 1 ko insert krega
console.log(arr);

arr.shift();
console.log(arr)

arr[10] = "Chef";
console.log(arr);