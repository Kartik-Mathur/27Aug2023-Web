function fun(){
    let x = 10;

    function child(){
        x++;
        console.log(x);
    }

    return child;
}

let f = fun();
f(); // 11 
f(); // 12
f(); // 13

let f1 = fun();
f1();
f1();
f1();