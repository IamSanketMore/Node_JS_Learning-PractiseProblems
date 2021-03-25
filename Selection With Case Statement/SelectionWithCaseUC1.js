//1.Read a single digit number and write the number in word using Case
//SelectionWithCaseUC1.js

let randomCheck =( Math.floor(Math.random() * 10) % 10);

switch(randomCheck)
    {
    case 1:
        console.log(randomCheck+" - ONE");
        break;
    case 2:
        console.log(randomCheck+" - TWO");
        break;
    case 3:
        console.log(randomCheck+" - THREE");
        break;
    case 4:
        console.log(randomCheck+" - FOUR");
        break;
    case 5:
        console.log(randomCheck+" - FIVE");
        break;
    case 6:
        console.log(randomCheck+" - SIX");
        break;
    case 7:
        console.log(randomCheck+" - SEVEN");
        break;
    case 8:
        console.log(randomCheck+" - EIGHT");
        break;
    case 9:
        console.log(randomCheck+" - NIE");
        break;
    case 0:
        console.log(randomCheck+" - ZERO");
        break;
    
}