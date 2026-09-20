let num1 = Number(prompt("Enter a Num1 : "));
let num2 = Number(prompt("Enter a Num2 : "));
let num3 = Number(prompt("Enter a Num3 : "));

if( num1 > num2 && num1>num3){
    console.log(`Largest is ${num1}`);
}else if(num2 > num3){
    console.log(`Largest is ${num2}`);
}else{
    console.log(`Largest is ${num3}`);
}