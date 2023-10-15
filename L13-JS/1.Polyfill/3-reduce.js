Array.prototype.myreduce = function(fun, initialValue) {
    // fun = (acc,val,i,a)=>{
    //     console.log("Value:", val, "Index:", i, "Array", a);
    //     return acc+val;
    // }
    let arr = this;
    let acc,start;
    if (initialValue != undefined) start = 0, acc = initialValue;
    else start = 1,acc = arr[0];

    for(let i = start ; i < arr.length; i++){
        acc = fun(acc,arr[i],i,arr);
    }
    return acc;
}

let arr = [1, 2, 3, 4, 5];
let ans = arr.myreduce((acc, val, i, a) => {
    console.log("Value:", val, "Index:", i, "Array", a);
    return acc + val;
});

console.log(ans);