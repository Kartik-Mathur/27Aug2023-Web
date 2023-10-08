class Person{
    constructor(name,age,city,income){
        this.name = name;
        this.age = age;
        this.city = city;
        this.taxLagega = function(){
            return income > 10 ? "Tax Dena Hoga" : "Tax Nahi lagega";
        }
    }
}

let aryan = new Person("Aryan",19,"Delhi",-10);
console.log(aryan);

let aditya = new Person("Aditya",23,"Gorakhpur",10000);
console.log(aditya);

console.log(aryan.taxLagega());
console.log(aditya.taxLagega());

console.log(aryan.__proto__ == Person.prototype);
console.log(typeof Person);

console.log(aryan.__proto__.__proto__  == Object.prototype);
console.log(aryan.__proto__.__proto__.__proto__);
