// console.log(null === 0);
// console.log(null == undefined);
// console.log(undefined == null);

// console.log("\n" === false);
// console.log("\t" === false);

// if (" ") {
//   console.log("true");
// } else {
//   console.log("false");
// }


// const obj = {
//   age: 25,
//   name: "Chetan",

//   isMarried: false,

//   valueOf() {
//     console.log("2️⃣ valueOf() called");
//     return this.isMarried;
//   },
//   toString() {
//     console.log("3️⃣ toString() called");
//     return this.name;
//   },
//   toNumber() {
//     console.log("4 toNumber() called");
//     return this.age;
//   },
//   [Symbol.toPrimitive](hint) {
//     console.log(`1️⃣ toPrimitive() called — hint: "${hint}"`);
//     if (hint === "string") {
//       return this.toString();
//     } else if (hint === "number") {
//       return this.toNumber();
//     } else if (hint === "default"){
//       return this.valueOf();
//     }
//   },
// };

// console.log("--- Test: number context ---");
// console.log(obj - 1);

// console.log("--- Test: string context ---");
// console.log(`${obj}`);

// console.log("--- Test: default context ---");
// console.log(obj + 1);

//* arithmetic Operator

// console.log("10 + 4" + " = " + `${10 + 4}`);//* ans : 14
// console.log("10 - 4" + " = " + `${10 - 4}`);//* ans : 6
// console.log("10 * 4" + " = " + 10 * 4);//* ans : 40
// console.log("10 / 4" + " = " + 10 / 4);//* ans : 2.5
// console.log("10 % 4" + " = " + 10 % 4);//* ans : 2
// console.log("10 ** 4" + " = " + 10 ** 4);//* ans : 10000

// * Compound Assignment Operator

// let a = 5;
// let b = 5;

// console.log(`a = a + 10 = ${(a = a + 10)} is Equal to  a += 10 = ${(b += 10)}`);//* ans : 15
// console.log(`a = a - 10 = ${(a = a - 10)} is Equal to  a -= 10 = ${(b -= 10)}`);//* ans : 5
// console.log(`a = a * 10 = ${(a = a * 10)} is Equal to  a *= 10 = ${(b *= 10)}`);//* ans : 50
// console.log(`a = a / 10 = ${(a = a / 10)} is Equal to  a /= 10 = ${(b /= 10)}`);//* ans : 5
// console.log(`a = a % 10 = ${(a = a % 10)} is Equal to  a %= 10 = ${(b %= 10)}`);//* ans : 5
// console.log(`a = a ** 2 = ${(a = a ** 2)} is Equal to  a **= 2 = ${(b **= 2)}`);//* ans : 25

// * Comparison Operator

// * it's always return a boolean value only.

// let x = 29;
// let y = 12;

// console.log(`x > y ${ x > y}`);//* ans : true
// console.log(`x < y ${ x < y}`);//* ans : false
// console.log(`x < y ${ x <= y}`);//* ans : false
// console.log(`x > y ${ x >= y}`);//* ans : true
// console.log(`x == y ${ x == y}`);//* ans : false
// console.log(`x === y ${ x === y}`);//* ans : false
// console.log(`x !== y ${ x !== y}`);//* ans : true
// console.log(`x != y ${ x != y}`);//* ans : true

//* Logical Operator

// let z=29;

// console.log(`z is greater then 5 and z is less then 100 ${!(z<5) && !(z>100)}`);//* ans : true
// console.log(`z is greater then 5 and z is less then 100 ${(z>5) && (z<100)}`);//* ans : true
// console.log(`z is greater then 5 and z is less then 100 ${(z<5) && (z<100)}`);//* ans : false
// console.log(`z is greater then 5 and z is less then 100 ${(z>5) && (z>100)}`);//* ans : false

// console.log(`z is greater then 5 or z is less then 100 ${!(z<5) || !(z>100)}`);//* ans : true
// console.log(`z is greater then 5 or z is less then 100 ${(z>5) || (z<100)}`);//* ans : true
// console.log(`z is greater then 5 or z is less then 100 ${(z<5) || (z<100)}`);//* ans : true
// console.log(`z is greater then 5 or z is less then 100 ${(z>5) || (z>100)}`);//* ans : true
// console.log(`z is greater then 5 or z is less then 100 ${(z<5) || (z>100)}`);//* ans : false

//* Unary  Operator ++(Increment Operator ) --(Decrement Operator )

//* ++(Increment Operator ) : Increases value by one
//*++ Post(Increment Operator ) // use first value then increase
//*++ Pre(Increment Operator ) // increase first then use

//* ++(Decrement Operator ) : Decreases value by one
//*-- Post(decrement Operator ) // use first value then decrease
//*-- Pre(decrement Operator ) // decrease first then use

// let a = 6;
// let b = 5;
// let c = 3;

// console.log( a++ + --b * c-- / --a + b++ % ++c ); //* ans : 9 *//
// console.log(object)

// const user={

//       name:"Chetan",
//       age:23,

//       state:{
//       name:"Gujarat",
//             city:{
//                   name:"Mumbai"
//             }
//       }
// }

// user.cgpa=9.8;

// console.log(user.cgpa);
// console.log("hello");

// const s={
//       name:"Chetan"
// };

// console.log(true + s);//
// console.log(true - s);
// console.log(1 + s);
// console.log(1 - s);
