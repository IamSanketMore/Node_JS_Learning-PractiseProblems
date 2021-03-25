//2. Write a program that takes a command-line argument n and prints the nth harmonic number
// Harmonic Number is of the form
//RepetitionWithForLoopUC2.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let m=2;
let sum=0;
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter n  Number for harmonic function :- ', (number) => 
{
    // compute 1/1 + 1/2 + 1/3 + ... + 1/n
    number = Number(number);
    let value = 0.0;

		for (let i = 1; i <= number; i++) 
		{
            //sum += 1.0 / i;
            value = value + (1.0/i);
		}
        let result=value;
		
		if(number>0)
	 	{
			console.log("The Harmonic Value for the number is: "+result);
	 	}
		else
		{
			console.log("The number should be greater than zero");
		}
    reads.close();
    console.log("-----------------------------------------------------------------------------------------------");
});


