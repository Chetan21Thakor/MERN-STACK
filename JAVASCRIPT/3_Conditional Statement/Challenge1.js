// console.log("Cart Value Discount:");

let cartValue = 200;

let discountCartValue = 0;

if (cartValue > 0 && cartValue <= 50) {
  console.log("No Discount");
} else if (cartValue > 50 && cartValue <= 100) {
  console.log("10 % Discount on Cart");
  discountCartValue = cartValue * 0.10;
} else if (cartValue > 100) {
  console.log("20 % Discount on Cart");
  discountCartValue = cartValue * 0.20;
}

let totalCartValue = cartValue - discountCartValue;

console.log(`Total Cart Value is : ${totalCartValue}`);




