//2. Read a Number and Display the week day (Sunday, Monday,…)
// Selection_IFElseIF_UC2.js

let randomCheck =( Math.floor(Math.random() * 10) % 8);

console.log("Random Number Generated :- "+randomCheck);
if(randomCheck == 1)
{
    console.log("\n"+randomCheck+" Monday ");
}
else if (randomCheck == 2)
{
    console.log("\n"+randomCheck+" Tuesday ");
}
else if (randomCheck == 3)
{
    console.log("\n"+randomCheck+" Wednesday");
}
else if (randomCheck == 4)
{
    console.log("\n"+randomCheck+" Thrusday");
}
else if (randomCheck == 5)
{
    console.log("\n"+randomCheck+" Friday ");
}
else if (randomCheck == 6)
{
    console.log("\n"+randomCheck+" Saturday ");
}
else if (randomCheck == 7)
{
    console.log("\n"+randomCheck+" Sunday");
}
else if (randomCheck == 0)
{
    console.log("\n"+randomCheck+" ZERO");
}
else{}    