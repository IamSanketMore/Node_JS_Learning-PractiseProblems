//2. Find the Magic Number
//a. Ask the user to think of a number n between 1 to 100
//b. Then check with the user if the number is less then n/2 or greater
//c. Repeat till the Magic Number is reached
//RepetitionWithWhileLoopUC2.js


const readline = require('readline');
const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
console.log("*****************************     Magic Number    ********************************************");
console.log("-----------------------------------------------------------------------------------------------");
console.log(" Consider number  between 1 to 100 :- ");

let isCorrect="False"
let minBound=0
let maxBound=100
let min=0
let mid;


while ( isCorrect == "False" )
{
        mid =(maxBound + minBound ) / 2;


    reads.question(' the Correct Answer : True or False \n ', (isCorrect) => 
    {
        if ( isCorrect == "True" )
        {
            console.log("");
           // break; 
        }
        else
        {
            reads.question(' The number Greater or Less Than  : Enter Greater or Less  :- ', (grtOrLess) => 
            {
                if ( grtOrLess == "Greater" )
                {
                    minBound=$mid
                }
                else
                {
                    maxBound=$mid
                }
                reads.close();
                        
            });
        }
    });
}
let magicNumber = mid;

while ( magicNumber != 1 )
{
        let firstNumber = ( magicNumber / 10 );
        let secondNumber = ( magicNumber % 10 );
        magicNumber = ( firstNumber + secondNumber );

        if ( magicNumber == 1 )
        {
            console.log("The Number is a Magic Number");
                break;
        }
        else
        {
                if ( firstNumber == 0 )
                {
                    console.log("The Number is not a magic Number");
                        break;
                }
        }
}