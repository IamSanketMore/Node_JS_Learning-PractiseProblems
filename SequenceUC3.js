//Use REPL – Add two Random Dice Number and Print the Result

let firstRandomDice =( Math.floor(Math.random() * 10) % 6 ) + 1;
let secondRandomDice =( Math.floor(Math.random() * 10) % 6 ) + 1;

console.log("Randomly 2 Dice Throw And Addition is");
console.log("----------------------------------------------");
console.log("First Dice :- " + firstRandomDice );
console.log("Second Dice :- " + secondRandomDice);
let addition = firstRandomDice + secondRandomDice;
console.log("Addition is :- "+ addition);
console.log("----------------------------------------------");