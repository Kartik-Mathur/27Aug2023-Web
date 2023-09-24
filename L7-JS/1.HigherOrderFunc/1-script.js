// FUNCTION RETURNING FROM A FUNCTION
function genFun(){
    
    function hello(){
        console.log("Hi!");
    }

    return hello; // returns entire function
    // return hello(); // returns undefined, because hello kch return nhi kar rha
}

let x = genFun();
x();


// FUNCTION PASSED AS AN ARGUMENT
function printFun(f){
    console.log(f.toString());
    f(); // Calling the function recieved as an argument
}

function hello(){
    console.log("Hello World!!");
}

// hello()
// printFun(hello); //printFun mei hello ko as argument bhej diya
// printFun(hello()); 
