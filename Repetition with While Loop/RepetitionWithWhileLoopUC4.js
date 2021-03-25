//4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke 
//i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won 
//and number of bets made.
//RepetitionWithWhileLoopUC4.js

const readline = require('readline');
const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("-----------------------------------------------------------------------------------------------");
console.log("*****************************     Gambler Game     ********************************************");
console.log("-----------------------------------------------------------------------------------------------");
reads.question(' Enter Initial  Stake value:- ', ($Stake) => 
{
    reads.question(' Enter Goal Value :- ', ($Goal) => 
    {
        reads.question(' Enter number of times::- ', (noOfTimes) => 
        {   
                let bets = 0;        // total number of bets made
                let wins = 0;        // total number of games won
                let loss = 0;        // total number of games lossess

                // repeat number of times
                for (let i=0; i< noOfTimes; i++) 
                {
                    let cash = $Stake;
                        
                    while (cash > 0 && cash < $Goal)
                    {
                        bets++;
                    
                        if (Math.random() < 0.5) 
                            cash++;     // win $1
                        else                     
                            cash--;     // lose $1
                    }
                        if (cash == $Goal) 
                            wins++;                // to find no. of wins 
                       
                        loss =  noOfTimes - wins ;
                }

                // print results
                console.log();
                console.log(wins + " wins of " + noOfTimes);
                console.log(loss + " loss of " + noOfTimes);
                console.log("Percent of games Won  = " + 100.0 * wins / noOfTimes);
                console.log("Percent of games Loss = " + 100.0 * loss / noOfTimes);
                console.log("Average  % of bets    = " + 1.0 * bets / noOfTimes);
            
            reads.close();
            console.log("-----------------------------------------------------------------------------------------------");
        });
    });
});