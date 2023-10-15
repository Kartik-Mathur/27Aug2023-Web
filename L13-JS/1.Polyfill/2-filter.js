Array.prototype.myfilter = function (fun) {
    // fun=(e, i, a) => {
    //     console.log("Value:", e, "Index:", i, "Array", a);
    //     return (e % 2) ? false : true;
    // }
    let x = this;
    let newarray = [];
    for (let i = 0; i < x.length; i++) {
        if (fun(x[i], i, x)) newarray.push(x[i]);
    }
    return newarray;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.myfilter((e,i,a) => {
    // console.log("Value:", e, "Index:", i, "Array", a);
    return (e % 2) ? false : true;
});

console.log(newArr);