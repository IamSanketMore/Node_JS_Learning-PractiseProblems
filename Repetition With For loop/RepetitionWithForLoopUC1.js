//1. Write a program that takes a command-line argument n and 
//   prints a table of the powers of 2 that are less than or equal to 2^n.
//RepetitionWithForLoopUC1.js


const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let m=2;
let sum=0;
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter a Number :- ', (number) => 
{
    console.log("-----------------------------------------------------------------------------------------------");
    console.log("2 ^ "+number+" = "+(Math.pow(2,number)));
    console.log("Printing all 2's Power till  Value :-"+number);
    
    for (let i =1;i<=number;i++)
    {
        console.log("Power of 2 ^ "+i+" is: "+(Math.pow(2,i)));
    }

    reads.close();
    console.log("-----------------------------------------------------------------------------------------------");
});


