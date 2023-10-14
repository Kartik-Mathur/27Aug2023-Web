let arr = [1,2,3,4,5];

arr.forEach((e,indx,arr)=>{
    console.log("Index:",indx,"Value: ",e,"Array:",arr);
})

// Filter, Map, Reduce
// let newArr = arr.map((e,indx,arr)=>{
//     return e*10;
// })

let newArr = arr.map((e,indx,arr)=>{
    if(e%2 == 0) return "Even";
    else return "Odd";
})

console.log(newArr);
console.log(arr);

let newArr1 = arr.filter((e,indx,arr)=>{
    if(e%2 == 0) return true;
    return false;
})

console.log(newArr1);


let sum = arr.reduce((accum,val,indx,arr)=>{
    return accum + val;
},0);

console.log("Sum",sum);

let product = arr.reduce((accum,val,indx,arr)=>{
    return accum * val;
},1);

console.log("Product",product);