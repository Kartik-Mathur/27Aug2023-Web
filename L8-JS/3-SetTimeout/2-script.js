// let id = setInterval(function(){
//     console.log("Hello");
// },100);

// setTimeout(function(){
//     clearInterval(id);
// },5000);

let id = setInterval(function(){
    console.log("Hello"); 
},1,setTimeout(function(){
    clearInterval(id);
},5000));