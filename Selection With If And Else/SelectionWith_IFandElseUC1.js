//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
//SelectionWith_IfandElseUC1.js


let randomNumber1 =( Math.floor(Math.random() * 1000) % 999) ;
let randomNumber2 =( Math.floor(Math.random() * 1000) % 999) ;
let randomNumber3 =( Math.floor(Math.random() * 1000) % 999) ;
let randomNumber4 =( Math.floor(Math.random() * 1000) % 999) ;
let randomNumber5 =( Math.floor(Math.random() * 1000) % 999) ;

console.log("Random 3 digit number 1 is :-"+randomNumber1);
console.log("Random 3 digit number 2 is :-"+randomNumber2);
console.log("Random 3 digit number 3 is :-"+randomNumber3);
console.log("Random 3 digit number 4 is :-"+randomNumber4);
console.log("Random 3 digit number 5 is :-"+randomNumber5);

let min = 0;
let max = 0;
 
//----------Check Random 1 is Max Or Min then Random Number 2------------//
if(randomNumber1 > randomNumber2)
{
    max = randomNumber1;
    min = randomNumber2;
}
else
{
    max = randomNumber2;
    min = randomNumber1;
}
//--------Check Random Number 3 is Max or Min ------------------//
    if (randomNumber3 > max)
    {
        max = randomNumber3;
    }
    else
    {
        if(randomNumber3 < min)
        {
            min = randomNumber3;
        }
    }
//--------Check Random Number 4 is Max or Min ------------------//
    if (randomNumber4 > max)
    {
        max = randomNumber4;
    }
    else
    {
        if(randomNumber4 < min)
        {
            min = randomNumber4;
        }
    }
//--------Check Random Number 5 is Max or Min ------------------//
    if (randomNumber5 > max)
    {
        max = randomNumber5;
    }
    else
    {
        if(randomNumber5 < min)
        {
            min = randomNumber5;
        }
    }
console.log("------------------------------------------------------------------------");
console.log("Maximum Number is :- "+max);
console.log("Minimum Number is :- "+min);
console.log("------------------------------------------------------------------------");