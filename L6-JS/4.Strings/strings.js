let str = "Hello World learning strings!";

let newStr = "";
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (i != str.length - 1)
        newStr += str[i] + '-';
    else
        newStr += str[i];
}

console.log(newStr);
console.log(str.indexOf("learnings"));
let newArr = str.split(" ");
console.log(newArr);
console.log(newArr.pop());