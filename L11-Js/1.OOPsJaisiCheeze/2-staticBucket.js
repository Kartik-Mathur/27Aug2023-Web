function VehicleMaker(type){
    let counter = 0;
    return function(name,model){
        counter++;
        this.name = name;
        this.model = model;
        console.log(`Count of ${type}:`,counter);
    }
}

let Car = VehicleMaker("Car");
let Car_A = new Car("Audi",2020);
let Car_B = new Car("BMW",2021);

console.log(Car_A);
console.log(Car_B);


let Rickshaw = VehicleMaker("Rickshaw");

let Rickshaw_A = new Rickshaw("Bajaj",2019);
let Rickshaw_B = new Rickshaw("Tata",2020);
