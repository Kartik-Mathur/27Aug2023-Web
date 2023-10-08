let GF = 'shyamlal';

let p = new Promise((resolve, reject) => {
    if (GF != 'shyamlal') {
        return reject('Iphone nahi dunga');
    }
    setTimeout(() => {
        resolve('Iphone dilwa dunga');
    }, 3000);
});



p.then((msg)=>{
    console.log(msg);
    return 'Charger Bhi lelo';
})
.then((secondMsg)=>{
    console.log(secondMsg);
    return 'Cover bhi lelo';
})
.then((thirdMsg)=>{{
    console.log(thirdMsg);
}})
.catch((errorMsg)=>{
    console.log(errorMsg);
})
.finally(()=>{
    console.log("Haash Saara Kaam khatam");
})
