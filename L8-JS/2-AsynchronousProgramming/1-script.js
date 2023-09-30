setTimeout(function(){
    console.log("Delayed 6 sec");
},6000);

setTimeout(function(){
    console.log("Delayed 5 sec");
},5000);

// Giving a delay of 1 second synchronously
// console.log(new Date().getTime());
// function delayASec(){
//     let t = new Date().getTime();
//     while(new Date().getTime() - t < 1000){}
// }

// function delayNSec(n){
//     for(let i = 0 ; i < n ; i++){
//         delayASec();
//     }
// }

// delayNSec(5);

console.log("After set timeout mei hoon");
let  x = 10;
console.log(x);