//3. Take a number from user and check if the number is a Prime then show that its palindrome is also prime
//a. Write function check if number is Prime
//b. Write function to get the Palindrome.
//c. Check if the Palindrome number is also prime
//FunctionsUC3.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-----------------------------------------------------------------------------------------------");

reads.question(' Enter First Number :- ', (number) => 
{
    let isPalin = Palindromes(number);
    
    console.log("----- Checking Number is Prime And Palindrome ----- ");
    if ( isPalin == true )
    {
        var isPrime = Prime(number);
        if( isPrime == true )
        {
            console.log(" It is Palindrome Number ");
            console.log(" It is Prime Number");
        }
        else
        {
            console.log(" It is Palindrome Number ");
            console.log(" It is Not Prime Number");
        }
    }
    else
    {
        var isPrime = Prime(number);
        if( isPrime == false )
        {
            console.log(" It is Not Palindrome Number ");
            console.log(" It is Not Prime Number");
        }
        else
        {
            console.log(" It is Not Palindrome Number ");
            console.log(" It is Prime Number");
        }
    }
    console.log("-----------------------------------------------------------------------------------------------");
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
            return true;
        else
            return false;
}

function Prime(number)
{
    let num = parseInt(number);
    let flag = 0;

    for ( i=2 ; i < number ; i++ )
    {
        if (number % i  == 0 )
        {
            flag=1
            break
        }
    }
    if ( flag == 0 )
        return true;
    else
        return false;        
}