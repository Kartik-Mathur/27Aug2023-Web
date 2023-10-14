let GF = 'shyamlal';

let p = new Promise((resolve, reject) => {
    if (GF != 'shyamlal') {
        return reject('Iphone nahi dunga');
    }
    setTimeout(() => {
        console.log("Calling Resolve Function");
        resolve('Iphone dilwa dunga');
    }, 5000);
});



setTimeout(()=>{
    console.log("Creating .then wala part for resolve func");
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
    
},3000);
