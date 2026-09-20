let num1 = Number(prompt("Enter a Num1 : "));
let num2 = Number(prompt("Enter a Num2 : "));

let choice =String(prompt("Select Operation : + , - , / , *"));

let res;

switch(choice){
    case '+':res=num1 + num2;
    break;
    case '-':res=num1 - num2;
    break;
    case '/':res=num1 / num2;
    break;
    case '*':res=num1 * num2;
    break;
    default:console.log("Select Valid Operation");
}

console.log(`${num1}  ${choice} ${num2} = ${res}`);