// IIFEs can be used for minification
// Let's reduce the below code
// function operations(a, b) {
//     console.log("Sum: ", a + b);
//     console.log("Sub: ", a - b);
//     console.log("Product: ", a * b);
//     console.log("Sqrt: ", Math.sqrt(a), ",", Math.sqrt(b));
//     console.log("Sin: ", Math.sin(a), ",", Math.sin(b));
//     console.log("Cos: ", Math.cos(a), ",", Math.cos(b));
//     console.log("Tan: ", Math.tan(a), ",", Math.tan(b));
// }
// operations(20,10);

// Solution
((a,b,cl,msq,mc,mt,ms)=>{
    cl("Sum: ", a + b);
    cl("Sub: ", a - b);
    cl("Product: ", a * b);
    cl("Sqrt: ", msq(a), ",", msq(b));
    cl("Sin: ",ms(a), ",", ms(b));
    cl("Cos: ", mc(a), ",", mc(b));
    cl("Tan: ", mt(a), ",", mt(b));
})(20,10,console.log,Math.sqrt,Math.cos,Math.tan,Math.sin);
