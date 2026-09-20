console.log("hi")

let bulb = document.querySelector("#bulb");
// console.log(div);
let btn = document.querySelector(".content > button");
// console.log(btn);

// btn.onclick=()=>{
//     console.log("btn double clicked");
// }

// bulb.addEventListener("click", () => {
//     if (!(bulb.classList.contains("on"))) {
//         bulb.classList.add("on")
//         console.log("bulb light on");
//         bulb.style.backgroundColor = "orange";
//     } else {
//         bulb.classList.remove("on")
//         console.log("bulb light off");
//         bulb.style.backgroundColor = "orange";
//     }
// });

// 1. We don't need getElementById, the DOM gives us a shortcut for the body!
const webpageBody = document.body;

// // 2. Attach the listener for when the mouse enters the webpage
// webpageBody.addEventListener("mouseenter", function() {
//     // 3. Change the CSS cursor property to the image, with "auto" as a fallback
//     webpageBody.style.cursor = "url('pencil-20x20.png'), auto";

// });

// bulb.addEventListener("mouseenter",()=>{
//     console.log("mouse enter on browser window...");
// });

// bulb.addEventListener("mouseleave",()=>{
//     console.log("mouse enter on browser window...");
// });

// window.addEventListener("DOMContentLoaded", event => {
//     console.log("Document loaded successfully", event);
//     console.log("Name of the event is : ", event.type);
//     console.log(event.target);
// });

// window.addEventListener("resize",(event)=>{
//     console.log(event.type);
//     console.dir(event.target);
//     console.log(event.AT_TARGET);
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
// });

// let content = document.getElementById("div");
// const btn = document.createElement("button");
//         btn.innerText = "BACK TO TOP";
//         btn.setAttribute("style", "background-color:red;color:white,border-radius:10px;");

// window.addEventListener("scroll",
//     (event) => {
//     }
// );



// window.addEventListener("scroll", (event) => {
//     if (window.scrollY > 300) {
//         btn.style.display = "block"; // Show the button
//     } else {
//         btn.style.display = "none";  // Hide the button when near top
//     }
// });

// const content = document.getElementById("div");

// // 1. Create and style the button ONCE outside the scroll handler
// const btn1 = document.createElement("button");
// btn.innerText = "BACK TO TOP";
// btn.setAttribute("style", "background-color: red; color: white; border-radius: 10px; display: none;");

// // 2. Append it ONCE to the page
// webpageBody.append(btn);

// // 3. The scroll listener only manages VISIBILITY
// window.addEventListener("scroll", (event) => {
//     if (window.scrollY > 300) {
//         btn.style.display = "block"; // Show the button
//     } else {
//         btn.style.display = "none";  // Hide the button when near top
//     }
// });

// window.addEventListener("keydown", (event) => {
//     // console.log("Key character:", event.key);
//     // console.log("Physical code:", event.code);

//     // // Common pattern: check for specific keys
//     // if (event.key === "Enter") {
//     //     console.log("User pressed Enter!");
//     // }
//     let ctnpluseminAdd=`Control ${event.key}`;
//     let ctnpluseadd=`Control ${event.key}`;

//     if((`Control -`=== ctnpluseminAdd) ){
//         window.innerHeight-=100;
//         console.log(window.innerHeight);
//     }else if((`Control +`=== ctnpluseadd)){
//         window.innerHeight+=200;
//         console.log(window.innerHeight);
//     }
// });