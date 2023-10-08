class Person {
    constructor(name, age, city, income) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.taxLagega = function () {
            return income > 10 ? "Tax Dena Hoga" : "Tax Nahi lagega";
        }
    }

    sayHello(){
        console.log("hello");
    }
}

class Child extends Person {
    constructor(name, age, city, income, education) {
        super(name,age,city,income);
        this.education = 'Class XII';
    }
}



// let aryan = new Person("Aryan", 19, "Delhi", -10);
// console.log(aryan);

let Aditya = new Child("Aditya",23,"Gorakhpur",10000);
console.log(Aditya);
Aditya.sayHello();

console.log(Child.__proto__ == Person);
console.log(Aditya.__proto__ == Child.prototype);
console.log(Child.prototype.__proto__ == Person.prototype);