function Person(){

}

console.log(Person.__proto__ == Function.prototype); // true
console.log(Person.prototype.__proto__);
Person.prototype.sayHello = ()=>{
    console.log("Hello  Unkil");
}

function Child(name,age,vaccination){
    this.name = name;
    this.age = age;
    this.vaccination = vaccination;
}

Child.prototype = Object.create(Person.prototype);//  Without this link
// Child ka prototype person ke prototype ko access nahi kr skta
// Aur manually  har kisi ko link krna pagal pana hai
// Sochlo 100 functions bana diye ab link krne ka sochna hai? 
// Chhodo UPSC shuru
console.log(Child.prototype.__proto__)

let child = new Child();
child.sayHello();