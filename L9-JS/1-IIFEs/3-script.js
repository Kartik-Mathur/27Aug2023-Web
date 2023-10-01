// Returning Multiple Values from IIFEs
let aakriti = (function(){
    let age = 20;
    function drivingEligible(){
        (age >= 18) ? 
        console.log("Drive Eligible") : 
        console.log("Drive Not Eligible");
    }

    function drinkingEligible(){
        (age >= 21) ? 
        console.log("Driking Eligible") : 
        console.log("Driking Not Eligible");
    }
    
    // return {
    //     drinkingEligible,
    //     drivingEligible
    // };
    return {
        drinkAllowed: drinkingEligible,
        driveAllowed: drivingEligible
    };
})();

console.log(aakriti);
aakriti.drinkAllowed();
// aakriti.drivingEligible();
// aakriti.drinkingEligible();