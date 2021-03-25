//  Write a program that takes a year as input and outputs the Year is a Leap Year or not
//a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
//divisible by 400.
//SelectionWith_IfandElseUC3.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reads.question('Please enter Year (yyyy) format :- ', (year) => 
{
    if((year % 4 == 0 )  && (year % 100 != 0) || (year % 400 ==0))
    {
        console.log(year+ " THis is Leap Year");
    }
    else
    {
        console.log(year+ " This Not Leap Year");
    }
    reads.close();
});
