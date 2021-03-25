//1. Write a program that takes a command-line argument n and prints a table of the powers of 2
// that are less than or equal to 2^n till 256 is reached..
//RepetitionWithWhileLoopUC1.js


const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter n Number For Power 2 :- ', (number) => 
{
    let index =0;
    while (number < 256)  
    {
            number=( 2 ** index );
    
            console.log(" Power of 2 ^"+index+" is :-"+number);
            index = ( index + 1 );
    
    }
     
        reads.close();
    console.log("-----------------------------------------------------------------------------------------------");
});