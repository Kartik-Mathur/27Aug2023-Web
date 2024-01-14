let p = new Promise((resolve,reject)=>{
    resolve("Hello");
})

p.then((data)=>{
    console.log(data);
    return "World"
})
.then((data)=>{
    console.log(data);
    return "Coding";
})
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})
