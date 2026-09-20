console.log("Calculate the Discount On Final Price");

let itemPrice=20;

let quantity=Number(prompt("how many item you need:"));

let totalPrice,discount=15;

totalPrice=itemPrice*quantity;

console.log(totalPrice);

let discount_in_rupee=totalPrice * (15/100);
console.log(discount_in_rupee);

let discountedPrice=totalPrice - discount_in_rupee;

alert("your Payable money is :" + discountedPrice);

let a=0;
console.log(-a);

//TODO Challenge 2 and Challenge 3 and assignment question is remain to complete 
