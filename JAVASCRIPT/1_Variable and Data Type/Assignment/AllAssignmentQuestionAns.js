//! 1: How do you declare a variable in JavaScript?

let variable;
var variable1;
const variable2=0;

// ! 2: What is the difference between var, let, and const?
// * ans

// * var
// A variable which created using a var keyword it's has global scope means it's can accessible any where in entire js file.
//Scope means area or block where the variable can be used aur access.
//A variable which created using a var keyword it's can redeclare or reinitialize.

// * let
// A variable which created using a let keyword it's has block scope means it's can accessible within it's block.
//Scope means area or block where the variable can be used aur access.
//A variable which created using a let keyword it's can  reinitialize.

// * const
// A variable which created using a const keyword it's has block scope means it's can accessible within it's block.
//Scope means area or block where the variable can be used aur access.
//A variable which created using a const keyword it's can't reinitialize.
//A variable which created using a const keyword you must to initialize it.

//! 3: Can you change the value of a const variable?
//* ans is NO.

//! 4: What will happen if you use a variable without declaring it?
//* ans : it's give you error variable is not declare in this scope.

// ! 5: What is the default value of an uninitialized variable in JavaScript?
//* ans : undefined

// ! 6: What are the primitive data types in JavaScript?
// * ans : NNSSBBU
//* N : Number
//* N : Null
//* S : Symbol
//* S : String
//* B : Boolean
//* B : BigInt
//* U : Undefined

//! 7: What is the difference between null and undefined?
// * ans : Null means absence of the value.
// * you can  initialize any variable with Null then it's store null.
// * type of null is object.

// * ans : undefined means unknown value which not defined.
// *   uninitialize variable store undefined by default.
// * type of undefined is undefined.

// !  Is JavaScript a statically typed or dynamically typed language?
//* ans : JavaScript dynamically typed language.

// ! 9: What will be the output of typeof null?
// * ans : type of null is object.

//! 10: What happens when you add a number and a string in JavaScript?
// * ans : you add string with number or number with string ti's concatenate number with string.

//! 11: What is type coercion? Give an example.
// * ans : Type coercion is process of the converting one data type to another data type.
//* there are two type of type conversion available in js.
//* Implicit type conversion
// * it's done automatically  by js engine when it's need.
//* explicit type conversion
//* it's done by programmer.

//* Example
console.log(6 + "hello ");//* ans : '6hello'
console.log("hello" - 4);//* ans : NaN
console.log(Number('773'))//* ans : 773 
//! 12: How can you manually convert a string to a number in JavaScript?
console.log(Number('773'))//* ans : 773
//* using different - different method of primitive data type.

//! 13: What is the result of "5" - 3 in JavaScript?
// * ans : "NaN stand for a Not a number. It's Invalid number. for example 0/0 . it's give infinity is not a valid number"
//* "in js we can check a any number is valid number or not using isNaN() function." +"it's give true when the Number is not valid number otherwise give a false" + "it's only work with numbers"

//! 15: How do you check the type of a variable in JavaScript?
// * ans : using type of Operator. it's unary Operator . it's take any variable and return it's data type . which type of value hold by variable.