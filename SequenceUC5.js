//Use Script & Debug – Unit Conversion
//    a. 1ft = 12 in then 42 in = ? ft
//    b. Rectangular Plot of 60 feet x 40 feet in meters
//    c. Calculate area of 25 such plots in acres


console.log("------------ A. 1ft = 12 inches then 42 inches = ? feet --------------/n");
let feet = 12; // 12 inches means 1 feet
let inch = 42;

let inchToFeet = inch / feet;
console.log("Here Unit Conversion of 42 inches is " + inchToFeet + " Feet");

console.log("------------ B. Rectangular Plot of 60 feet x 40 feet in meters --------------\n");
let length = 60;
let width = 40;
let oneFeetToMeters = 0.3048;

console.log("Plot Length " + length + " Feet");
console.log("Plot width " + width + " Feet");

let areaOfPlot = length * width;
console.log("Area of Plot is :- "+areaOfPlot + "Feet");

console.log("\n1 Feet is equal to "+oneFeetToMeters + " Meters");
console.log("\n ****** Unit Conversion In Feet to Meteres ******* \n" );

let areaInMeters = areaOfPlot * oneFeetToMeters;
console.log("Rectangular Plot Length " + length + " Feet * width " + width + " Feet in Meters = "+areaInMeters+ " Meters " );

console.log("\n------------  C. Calculate area of 25 sq meters such plots in acres --------------\n");

plotInSqMtrs = 25;

oneSqMtrsToAcres = 0.00024710538146717;

console.log("Acres in one sq meters "+oneSqMtrsToAcres);

let areaOfPlotInAcrs = plotInSqMtrs * oneSqMtrsToAcres;
console.log("\nArea of 25 sq meters in acres is :- "+areaOfPlotInAcrs);
console.log("-------------------------------------------------------------------------------------------------------");
