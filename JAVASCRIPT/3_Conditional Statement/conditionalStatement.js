//*  When we want js do some task or take decision based on specific situation or based on specific  condition that time we use conditional statement  it's give decision taking power to js.*//

//! if else conditional Statement

let weather = "rainy";

// if (weather === "rainy") {
//   console.log("take Umbrella.");
// } else {
//   console.log("Enjoy Sunshine.");
// }

if(""){
  console.log("truthy value")
}else{
  console.log("falsely value")
}

//* if else Statement work from top  to bottom
// * step 1 : it's check a condition which is define inside a if statement .
// * step 2: A condition is return "True" then if block of code is run or executed.
// * step 3: A condition is return "false" then else block of code is run or executed.
//* else part is Optional if you want to skip to write else block you can skip
//* else always come with one if statement.

//! if  statement internally work on ToBoolean Conversion  which check condition return a truthy value or Falsy value based on it's return true or false.

// ? Example of if else

    
// let age = 20;

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote.");
// }

// * You want check  Multiple condition  then you can use multiple if statement.compiler or js engine check each if statement condition and executed each  if block of code which if condition return a true.

//! Example of Multiple if statement 

let marks = 85;

if (marks >= 50) {
  console.log("You passed.");
}

if (marks >= 80) {
  console.log("You got an A grade.");
}

// * You want check  Multiple condition only any one of the if block is execute  which return true then you can use else if statement after one if statement . 



//* you can write multiple else if statement after one if statement which is executed one by one from top to bottom if above any one condition return a true then below all else if condition skip or we can say it's not executed after finding one true condition.

//! Example else if statement

let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

//* you can write multiple else if statement after one if statement which is executed one by one from top to bottom if above any one condition return a true then below all else if condition skip or we can say it's not executed after finding one true condition. if Above all condition are false then only then else block is executed at the end of the if and else if statement.

//* you can write one if statement into another if statement. it's called nested if else.

//Example of nested if else
// let username = "admin";
// let password = "1234";

// if (username === "admin") {
//   if (password === "1234") {
//     console.log("Login successful.");
//   } else {
//     console.log("Incorrect password.");
//   }
// } else {
//   console.log("Invalid username.");
// }










