((a, b, cl, msq, mc, mt, ms) => {
    cl("Sum: ", a + b);
    cl("Sub: ", a - b);
    cl("Product: ", a * b);
    cl("Sqrt: ", msq(a), ",", msq(b));
    cl("Sin: ", ms(a), ",", ms(b));
    cl("Cos: ", mc(a), ",", mc(b));
    cl("Tan: ", mt(a), ",", mt(b));
})(20, 10, console.log, Math.sqrt, Math.cos, Math.tan, Math.sin);