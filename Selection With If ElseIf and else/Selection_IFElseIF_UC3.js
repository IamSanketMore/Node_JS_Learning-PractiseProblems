//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
// Selection_IFElseIF_UC3.js


const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter a Choice between thes numbers [1,10,100,1000]:- ', (number) => 
{
    console.log("-----------------------------------------------------------------------------------------------");
    if ( number / 10 == 0.1 )
    {
        console.log(number+ " The Number is Unit Digit");
    }
    else if( number / 10 == 1 )
    {
        console.log(number+ " The Number is Ten Digit");
    }
    if(  number / 10 == 10 )
    {
        console.log(number+ " The Number is Hundred Digit");
    }
    else if( number / 10 == 100 )
    {
        console.log(number+ " The Number is Thousands Digit")
    }
    reads.close();
});
