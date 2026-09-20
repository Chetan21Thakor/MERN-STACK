// for(let i=0;i<10;i++){
//     console.log("Hi Good Morning Charvi");
// }

// let hello=function (){
//     console.log("hey");
// // }

// hello();
// say();

// let str="chetan";
// let ch=str[0].toUpperCase() + str.slice(1);
// let ch1=str.toLowerCase();
// // console.log(str);
// console.log(ch);
// console.log(ch1);

// setTimeout(() => {
//     console.log("please Login");
// }, 5000);

// let price=150;
// let discount=10;

// let finalPrice=()=>{
//     let discounted=price *0.10;
//      let discountedPrice= price - discounted;
//     return discountedPrice;
// }

// console.log(finalPrice());

// let fullname=" Chetan Thakor ";

// let userName=(fullname)=>{
//     let userName='@'+ fullname.trim().split(" ") + '21' ;
//     return  userName;
// }

// console.log(userName(fullname));

let trafficLight = (color) => {

  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Wait");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid Color");
      break;
  }

};

trafficLight('black');
