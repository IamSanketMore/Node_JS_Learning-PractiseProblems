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

//Array Helper Functions
//UC 7A -Calc total Wage Using Array forEach transcersal or reduce method

let totalEmpWage =0 ;
function sum(dailyWage)
{
    totalEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log(" UC-7A :: For Each :- Total Working Days:- " + totalWorkingDays +  
            " Total Hours:-  "+totalEmpHrs + "  EMP WAGE : - "+totalEmpWage);

//Use of Reduce Function
function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log(" UC-7A Emp Wage With reduce :- "+empDailyWageArr.reduce(totalWages,0));


//UC-7B Show the Day along with Daily wage  using along array map helper function
let dailyCounter =0 ;
function mapDailyWithWage (dailyWage)
{
    dailyCounter++;
    return dailyCounter + " = "+dailyWage;
}
let mapDailyWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC-7B :- Daily Wage");
console.log(mapDailyWageArr);

//UC 7C - Show Days When Full Time Wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDailyWageArr.filter(fulltimeWage);
console.log("UC-7C :- Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first Occurance  When Full Time Wage was earned using Find Function
function findfulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7D :- First time FullTime Wage was  Earned on :: [ Day "+
            mapDailyWageArr.find(findfulltimeWage)+ " ] ");

// UC-7E :: Check if Every Element of Full Time Wage Is Truely holding Full Time Wage
function isAllfulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7E :- Check All Element have FullTime Wage :: [ "+
            mapDailyWageArr.every(isAllfulltimeWage)+ " ] ");

// UC-7F :: Check there is any Part Time Wage 
function isAnyfulltimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC-7F :- Check If any have Part-Time Wage :: [ "+
            mapDailyWageArr.some(isAnyfulltimeWage)+ " ] ");

//UC-7G :: Find the number of Days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage > 0)
        return numOfDays+1;
        return numOfDays;
}
console.log("UC-7G :- number of Days the Employee Worked :: [ "+
            empDailyWageArr.reduce(totalDaysWorked,0)+ " ] ");



















