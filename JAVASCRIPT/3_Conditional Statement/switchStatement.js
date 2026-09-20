
// let day="Monday";
// let day="Tuesday";
// let day="Wednesday";
// let day="Thursday";
// let day="Friday";
// let day="Saturday";

let day="Sunday";

switch(day){
    case "Monday":console.log("Working Day");
                        break;
    case "Tuesday":console.log("Working Day");
                        break;
    case "Wednesday":console.log("Working Day");
                        break;
    case "Thursday":console.log("Working Day");
                        break;
    case "Friday":console.log("Working Day");
                        break;
    case "Saturday":console.log("HoliDay");
                        break;
    case "Sunday":console.log("HoliDay");
                        break;
    default:console.log("Invalid day");
}


//* Switch Statement is used when you want to give multiple choice to user and user can select any one of them.

//! Switch Statement internally work on the "===" on strictly equal to it's exact check the variable exactly matched with a case or not. it's also used Jump table for finding a case fast.

//* if the variable value exactly matched with any case then it's case block of code is executed.
//* break Statement is import is import to exit from switch statement. Without  break statement switch statement execute a all the case until it's not find a break statement or default case. 

//! Example
switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":console.log("Working Day");
    case "Saturday":
    case "Sunday":console.log("HoliDay");
    default:console.log("Invalid day");
}

//* In this above Example it's execute a all the case after finding first matched case.


switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":console.log("Working Day");
                        break;
    case "Saturday":
    case "Sunday":console.log("HoliDay");
                        break;
    default:console.log("Invalid day");
}

//* you can share same code for multiple case . what it's called i forgot that what it's called. 

//*  Multiple cases sharing one code block are called grouped cases or fall-through cases.