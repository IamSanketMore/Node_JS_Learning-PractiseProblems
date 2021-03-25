//4. Extend the program to take a range of number as input and output the Prime Numbers in that range.
//RepetitionWithForLoopUC4.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter Range Start Number :- ', (startNum) => 
{
    reads.question(' Enter Range End Number :- ', (endNum) => 
    {
        function primeFactorsTo(startNum,endNum)
        {
            let store = [],primes = [];
            let i,j;

            for( i=2 ; i <= endNum; i++)
            {
                
                if (!store [i]) 
                {
                    primes.push(i);
                    for ( j=i ; j <=endNum ; j+=i )
                    {
                        store[j] = true; 
                    }
                }
            }
            return primes;
        }
        console.log(primeFactorsTo(startNum,endNum));
        reads.close();
        console.log("-----------------------------------------------------------------------------------------------");

    });
});