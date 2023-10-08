let GF = 'sadasd';

let p = new Promise((resolve, reject) => {
    if (GF != 'shyamlal') {
        return reject('Iphone nahi dunga');
    }
    setTimeout(() => {
        resolve('Iphone dilwa dunga');
    }, 3000);
});

// Syntax:
// p.then(resolve,reject);
// p.then(resolve).catch(reject);

// p.then(
    // (msg)=>{
    //     console.log(msg)
    // },
    // (errorMsg)=>{
    //     console.log(errorMsg);
    // }
// );

p.then((msg)=>{
    console.log(msg)
})
.catch((errorMsg)=>{
    console.log(errorMsg);
})
.finally(()=>{
    console.log("Haash Saara Kaam khatam");
})

console.log(10+20);