// Returning Values from IIFEs
let eligibleForDriving = (function(){
    let age = 20;
    console.log("Hello World");

    function drivingEligible(){
        (age >= 18) ? 
        console.log("Drive Eligible") : 
        console.log("Drive Not Eligible");
    }

    return drivingEligible;
})();

eligibleForDriving();