const IS_PART_TIME = 1 ;
const IS_FULL_TIME = 2 ;
const PART_TIME_HOURS = 4 ;
const FULL_TIME_HOURS = 8 ;
const WAGE_PER_HOUR = 20 ;
const NUM_OF_WORKING_DAYS = 20 ;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck)
{
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;l
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC-6 Total Working Days:- " + totalWorkingDays +  
                "   Total Hours:-  "+totalEmpHrs + "  EMP WAGE : - "+empWage);
//UC7
let totalEmpWage =0 ;
function sum(dailyWage)
{
    totalEmpWage +=dailyWage;
}
//empDailyWageArr.forEach(sum);
//console.log("UC-7A Total Working Days:- " + totalWorkingDays +  
  //          " Total Hours:-  "+totalEmpHrs + "  EMP WAGE : - "+totalEmpWage);
empDailyWageArr.forEach(sum);
console.log("For Each:- " +totalEmpWage);
            


/*
function totalWages(totalWages,dailyWage)
{
    return totalWages + dailyWage;
}
console.log("UC-7A Emp Wage With reduce :"+empDailyWageArr.reduce(totalWages,0));

//UC-7B
let dailyCounter =0 ;
function mapDailyWithWage (dailyWage)
{
    dailyCounter++;
    return dailyCounter + "="+dailyWage;
}
let mapDailyWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC-7C- Daily Wage");
console.log(mapDailyWageArr);
*/