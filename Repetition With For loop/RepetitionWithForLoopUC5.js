//5. Write a program that computes a factorial of a number taken as input.
//5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

//RepetitionWithForLoopUC4.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter Number for get Factorial:- ', (number) => 
{
    let fact=1
        for ( i=1 ; i <= number ; i++ )
        {
            fact = (fact * i);
        }
        console.log(" Factorial of Number "+number+" is :-"+fact);
        
        reads.close();
    console.log("-----------------------------------------------------------------------------------------------");
});
