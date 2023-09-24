function fun(){
    let x = 10;
    function child(){
        x++;
        function grandChild(){
            x++;
            console.log(x);
        }
        return grandChild;
    }
    return child;
}

let f1 = fun();
let f11 = f1();
let f12 = f1();
f11();
f11();
f12();
f11();
f12();
