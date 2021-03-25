//SelectionWith_IFandElseUC1.js
// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
//SelectionWith_IfandElseUC4.js

let randomCoinFlip =( Math.floor(Math.random() * 10) % 2) ;

if (randomCoinFlip == 1) 
{
    console.log("\nCoin Flip Randomly You get Head\n");
} else 
{
    console.log("\nCoin Flip Randomly You get Tail\n");    
}