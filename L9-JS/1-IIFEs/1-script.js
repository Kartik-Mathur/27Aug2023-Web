(function hello(){
    console.log("Hello World");
})();

((a,b)=>{
    console.log("Sum: ",a+b);
    console.log("Diff: ",a-b);
})(20,10)