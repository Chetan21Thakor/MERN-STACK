console.log("What is NaN");
console.log("NaN stand for a Not a number. It's Invalid number. for example 0/0 . it's give infinity is not a valid number");

console.log("in js we can check a any number is valid number or not using isNaN() function." +"it's give true when the Number is not valid number otherwise give a false" + "it's only work with numbers" );

console.log(Number.isNaN()); // true

console.log(parseFloat("994.434"),parseInt("994.99"));
console.log(isNaN(Number(null)));
console.log(Number("     "));
console.log("      " == false); // why it's true

if(""){
    console.log("true");
}else{
    console.log("false");
}

console.log(Boolean("    "));