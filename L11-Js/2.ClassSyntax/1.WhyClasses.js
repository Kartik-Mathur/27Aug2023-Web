let parents = {
    money: 100,
    house: true,
    car: "BMW",
    bike: "Harley",
    codingSkills: "C++"
}

let aryan = Object.create(parents);
let aryan_junior = Object.create(aryan);

// console.log(aryan);
// console.log(aryan.house);
// console.log(aryan.car);

aryan.codingSkills = 'Web';
// console.log(aryan);
// console.log(aryan.codingSkills);
// console.log(aryan.__proto__)

// console.log(aryan_junior.car);
console.log(aryan_junior.__proto__.__proto__.__proto__.__proto__);