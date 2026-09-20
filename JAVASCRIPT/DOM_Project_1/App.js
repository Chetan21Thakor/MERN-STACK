// alert("Hello How are you.");

let randomColorBtn = document.getElementById("randomColorBtn");
let applyColorBtn = document.getElementById("applyColorBtn");
let userChoiceColor = document.getElementById("userChoiceColor");
let h2 = document.getElementById("h2");
// h2.style.visibility="hidden";
let body=document.querySelector("body");

// console.log(randomColorBtn.style.backgroundColor);
// console.log(h2.innerText);
// console.log(body)
// console.log(h2.setAttribute("style","background-color:red;"))
// console.log(body.className);
// body.className="n4";
// console.log(body.className);

body.classList.add("n2");
console.log(body.classList);
console.log(
    body.classList. contains("hi")
);
// body.classList.remove("hi");
// console.log(body.classList);
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "navy",
  "teal",
  "aqua",
  "maroon",
  "olive",
  "silver",
  "gold",
  "coral",
  "crimson",
  "indigo",
  "violet",
  "turquoise",
  "tomato",
  "salmon",
  "khaki",
  "plum",
  "orchid",
  "lavender",
  "beige",
  "ivory",
  "azure",
  "tan",
  "wheat",
  "chocolate",
  "sienna",
  "peru",
  "sandybrown",
  "firebrick",
  "darkred",
  "darkblue",
  "darkgreen",
  "darkorange",
  "darkviolet",
  "darkcyan",
  "darkmagenta",
  "darkgray",
  "darkkhaki",
  "darkolivegreen",
  "darkorchid",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "goldenrod",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "limegreen",
  "linen",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "oldlace",
  "olivedrab",
  "orangered",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "powderblue",
  "rebeccapurple",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "seagreen",
  "seashell",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "thistle",
  "whitesmoke",
  "yellowgreen"
];

let length=colors.length;

randomColorBtn.addEventListener("click",()=>{

    //*First Way Using List of Color Array.
    let randomColorInd=Math.floor(Math.random() * length)+1;
    let randomCol=colors[randomColorInd];
    body.style.backgroundColor=randomCol;
    h2.innerText=`Current Color : ${randomCol}`;

    //* Using Generating Random RGB color 
    // let red=Math.floor(Math.random() * 255)+1; 
    // let green=Math.floor(Math.random() * 255)+1; 
    // let blue=Math.floor(Math.random() * 255)+1; 
    // let rgb=`rgb(${red},${green},${blue})`;
    // h2.innerText=`Current Color : ${rgb}`;
});

applyColorBtn.addEventListener("click",()=>{
    userColor=userChoiceColor.value;
        if(!(userColor=="")){
            body.style.backgroundColor=`${userColor}`;
            h2.innerHTML=`Current Color :  ${userColor}`;
            
        }else{
            alert("Enter color name");
        }
        userChoiceColor.value="";
});

// console.log(userChoiceColor.parentElement.parentElement.);
// console.log(body.contains())

// console.log(userChoiceColor.getAttribute("")); 