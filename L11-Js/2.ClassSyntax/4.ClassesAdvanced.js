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
    //getter and setter
    get getAge(){
        return this.age;
    }
    set setAge(age){
        this.age = age;
    }
}

let aryan = new Person("Aryan",19,"Delhi",-10);
aryan.sayHello();

// getter and setter acts like a property not as functions
aryan.setAge = 100;
console.log(aryan.getAge);

