//* how to create a function

//? function declaration and definition
function hello() {
  console.log("hello world.");
}

//? function call or invoked. to invoke or call a function you need write a function then parenthesis must.
hello();

/* What is function parameter?
          Parameter is variable which are declare at time of the function
          declaration inside function parenthesis. 
          
          It's scope is function scope. it's not accessible outside a function.
          
          It's store or copy the value of the Actual Arguments.
     

        What is function Actual Arguments?
        When we are calling a function and passing some value as parameter it's called "Actual Arguments".
*/

//* if just write the name of the function means you are not calling function you are just access it's reference only . reference means it's memory address where it's store in memory.

// *There are Four way of the Creating a Function

// *            1.without parameter list and without return
// *            2.without parameter list and with return
// *            3.with parameter list and without return
// *            4.with parameter list and with return

// *  1.without parameter list and without return

function sayHello() {
  console.log("Hello ! Hi , How are you");
}

sayHello();

// *  2.without parameter list and with return

function  returnStr(){
    return "Hello ! Hi , How are you";
}

let res=returnStr();
console.log(res);

// *  3.with parameter list and without return

let name1="    Chetan Dhanaji Thakor   ";

function  printName(name){
    console.log(`${name}`);
}

printName(name1);

// *  4.with parameter list and with return

function  printUserName(name){
    return `@${name.trim().toLowerCase().split(" ").join("")}_${name.length}`;
}

console.log( printUserName(name1));

// *Default Parameter
function sum(a,b=0){
    return a+b;
}

 console.log(sum(1)); //* ans: 1
 console.log(sum(1,3)); //* ans: 4

// * Function Declaration (normal function)

function sayHello() {
  console.log("Hello ! Hi , How are you");
}

// * Function Expression

let sayHello1=function() {
  console.log("Hello ! Hi , How are you");
}

// * Arrow Function

let printUserName1=(name)=>{
    return `@${name.trim().toLowerCase().split(" ").join("")}_${name.length}`;
}


//* Anonymous Function
setTimeout(()=>{
    console.log("hello")
},5000);

//* IIFE (Immediately Invoked Function Expression)

(()=>{
    console.log("hey ");
})();



