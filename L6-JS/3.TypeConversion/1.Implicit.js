// Comparison Operator
// 1. Loose Equality ==
// 2. Strict Equality ===

console.log("'1' == 1 :","1" == 1); // True
console.log("'1' === 1 :","1" === 1); // False

console.log("\\t == 0 :",'\t'==0); // true
console.log("\\n == 0 :",'\n'==0); // true
console.log("\\t == \\n :",'\n'=='\t'); // False

console.log('[] == 0 : ',[] == 0); // True
console.log('"" == 0 : ',"" == 0); // True
console.log('"" == [] : ',"" == []); // true

console.log("[1,2,3] == [1,2,3] :",[1,2,3] == [1,2,3]); // false

let arr =  [1,2,3];
let x = arr;
console.log("arr == x : ",arr==x); // true

console.log("+[] :",+[]);
console.log("+[[[[[[]]]]]] :",+[[[[[[]]]]]]);
console.log("+[1] :",+[1]);

console.log("3+'3'",3+'3');
console.log("'3'+3",'3'+3);
console.log("3 + +'3'",3 + +'3');
console.log(0.2+0.1);
console.log(0.3-0.1);