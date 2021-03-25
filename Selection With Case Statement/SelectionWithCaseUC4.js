//4. Write a program that takes User Inputs and does Unit Conversion of different Length units
//1. Feet to Inch 3. Inch to Feet
//2. Feet to Meter 4. Meter to Feet
//SelectionWithCaseUC4.js

const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(" 1]  Feet to Inch ");
console.log(" 2]  Feet to Meter");
console.log(" 3]  Inch to Feet");
console.log(" 4]  Meter to Feet");
reads.question(' Enter Your  Choice  :-', (number) => 
{
 
    reads.question(' Enter Value Unit Coversion :-', (value) => 
    {
            switch (parseInt(number,10))//Parsing int 
            {
                case 1:
                        let feetToinches =(value * 12);
                        console.log(value+ " Feet is equal to "+feetToinches+" Inches\n");
                        break;
                case 2:
                        let feetTometer =(value * 0.3048);
                        console.log(value+ " Feet is equal to "+feetTometer+" Meter\n");
                        break;
                case 3:
                        let inchTofeet =(value * 0.08333); 
                        console.log(value+ " Inch is equal to "+inchTofeet+" Feet\n");
                        break;
                case 4:
                        let meterToFeet =(value * 3.28084 );
                        console.log(value+ " Meter is equal to "+meterToFeet+" Feet\n");
                        break;

            }
        reads.close();
    });
});
