let a = 10,b = 5;c = 6;

let res = a > b && a > c ? a : b > c ? b : c;

console.log(`Largest of ${a},${b} and ${c} is ${res}.`);
