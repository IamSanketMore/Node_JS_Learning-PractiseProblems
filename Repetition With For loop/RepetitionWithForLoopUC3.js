//3. Write a program that takes a input and determines if the number is a prime.
//RepetitionWithForLoopUC3.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter n  Number for check Number is Prime or Not:- ', (number) => 
{
    let flag=0
        for ( i=2 ; i < number ; i++ )
        {
            if (number % i  == 0 )
            {
                flag=1
                break
            }
        }

        if ( flag == 0 )
            console.log(number+"  is Prime" );
        else
            console.log(number+"  is Not Prime" );
        

        reads.close();
    console.log("-----------------------------------------------------------------------------------------------");
});
