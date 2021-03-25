//6. Write a program to compute Factors of a number N using prime factorization method.
//Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
//O/P -> Print the prime factors of number N.
//RepetitionWithForLoopUC6.js


const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter number for Check Prime Factors- ', (number) => 
{
    console.log("Prime Factors Of "+number+" Number is :-");
    let flag=0
    let i,j;
        for (i=2 ; i*i <=number ;)
        {
            flag=0
            for(j=2;j<i;j++)
            {
                if( number%j==0)
                {
                    flag = 1;
                    break;
                }
            }

            if ( flag == 0 )
            {
                if (number % i == 0)
                {
                    number = number / i;
                    console.log(i);
                }
                else
                {
                    i = ( i + 1 )
                        continue ;

                }
            }
        }
        console.log(number);

        

        reads.close();
    console.log("-----------------------------------------------------------------------------------------------");
});