//2. Write a function to check if the two numbers are Palindromes
//FunctionsUC2.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-----------------------------------------------------------------------------------------------");

reads.question(' Enter First Number :- ', (firstNum) => 
{
    reads.question(' Enter Second Number :- ', (secondNum) => 
    {
        Palindromes(firstNum);
        Palindromes(secondNum);
        console.log("-----------------------------------------------------------------------------------------------");
    });
});

function Palindromes(number)
{
    let number1 = parseInt(number);
    let reversedNumber = 0
    let originalNumber = number1;
    let remainder = 0;

        while ( number1 > 0 )
        {
            remainder = number1 % 10 ;
            
            reversedNumber = ( reversedNumber * 10 + remainder );
            
            number1 = parseInt(number1/10 );
        }
       
        if  ( originalNumber == reversedNumber)
        {
            console.log( originalNumber+" : Number is Palindrome:");
        }
        else
        {
            console.log(originalNumber+" : Number is not Palindrome"); 
        }
}