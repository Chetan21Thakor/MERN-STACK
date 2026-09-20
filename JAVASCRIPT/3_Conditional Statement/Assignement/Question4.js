// let number=Number(prompt("Enter A Number"));
let number = 15;

if (
  (number % 3 === 0 )||
  (number % 5 === 0)||(number % 3 === 0 && number % 5 === 0)
){
    if((number % 3 === 0 )){
        console.log("Fizz");
    }
    if((number % 5 === 0)){
        console.log("Buzz");

    }if((number % 3 === 0 && number % 5 === 0)){
        console.log("FizzBuzz");
    }
}else{
    console.log("Number is not Divisible By 3 or 5");
}
