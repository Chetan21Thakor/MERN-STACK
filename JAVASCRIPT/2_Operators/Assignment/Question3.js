
// ! 3. Get user to input a number using prompt and check whether even or odd using ternary operator.

let num = Number(prompt("Enter a Number : "));

res = !(num % 2) ? true : false;

if(res){
    console.log(`${num} is Even.`);
}else{
        console.log(`${num} is Odd.`);
}