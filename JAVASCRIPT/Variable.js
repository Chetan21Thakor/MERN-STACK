console.log("hello world");

// *  Variable is name of the memory location , it's just like a container which store some value.

// * three keyword are used to create a variable in js.

let age;
age = 21;

//* A variable  which declare using a let keyword is  has block scope means it's not accessible  outside the it's block scope. for example function scope, block scope ,if else block scope etc.

//* you can reinitialize it but not redeclare it.

console.log(age);

var full_name;
full_name = "Chetan Thakor";
//* A variable  which declare using a var keyword is  has global scope means it's  accessible  anywhere in file. for example function scope, block scope ,if else block scope etc.

//* you can reinitialize and  redeclare it.

console.log(full_name);

const pi = 3.14;
//* A variable  which declare using a const keyword is  has block scope means it's not accessible  outside the it's block scope. for example function scope, block scope ,if else block scope etc.

//* you can not reinitialize and  redeclare it.
console.log(pi);

// {
//     var text="hi , how are you?";
//     console.log(text);
//     var text="hi ,sweet heart.";
//     console.log(text);

//     let num=34;
//     let num=33;
//     console.log(num);

//     const g=9.8;
//     const g=99.8;
//     console.log(g);
// }

// console.log(text);
// console.log(num);
// console.log(g);

// different  different  way of creating a variable.

let a;
let b;
let c;

let d, e, f;

d = e = f = 2;

let h = 5,
  i = 8,
  j = 5;

console.log(i, h, j);
