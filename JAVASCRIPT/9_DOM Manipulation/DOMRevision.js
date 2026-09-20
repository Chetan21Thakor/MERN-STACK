// window.alert("Hi how are you?");

// var num=10;

// function hello(){
//     console.log("hello Window");
// }
// console.log(window.num);\

// window.hello();

// var Obj ={
//     name:"Chetan",
//     age:'32'
// };


// var arr=[2,3,3];
// console.log(window.arr);

// let h3=(document.getElementsByTagName("h3"));
// console.log(h3.entries());
// console.log(h3);
// let firstH3=h3[0];

// // console.log(firstH3);
// // let div=firstH3.parentElement;

// let createdH3=document.createElement("h3");
// createdH3.innerText="Hi i am h3 6";
// // div.append(createdH3);

// let firstH3=document.getElementById("h3");
// console.log(firstH3);

// let HtmlCollectionH3=document.getElementsByClassName("head");
// console.log(HtmlCollectionH3);

// let nodeListH3=document.getElementsByName("HII");
// console.log(nodeListH3);

// let nodeListH3_2=document.querySelectorAll("h3");
// console.log(m=nodeListH3_2);
// let h3_2=document.querySelector("h3");
// console.log(h3_2);

//HTML MANIPULATION
//* TAGNAME Read only.
//*Content
//* text
//* html'
//* Attribute


// let h2=document.getElementById("h2");
// let span=document.querySelector("h2 > span > span");
// console.log(span);
// // console.log(h2);

// // h2.nodeName="p";
// // console.log(h2.tagName);
// h2.innerText="Hi King."
// console.log(h2.innerText);

// h2.textContent="              Hy Queen                          ";
// console.log(h2.textContent);
// h2.innerHTML="                              <span>HI sweet heart...</span>               ";
// console.log(h2.innerHTML);

// console.log(h2.nextElementSibling); 
// console.log(h2.getAttribute("Id"));
// console.log(h2.attributes[0]);
// console.log(h2.contains(span))

// console.log(h2.ATTRIBUTE_NODE);

// let div=document.getElementById("div");
// // console.log(div.lastElementChild

// let p =document.createElement("p");
// p.innerHTML="NEW PARA ";
// p.style.background="rgb(4,112,223)";
// p.style.cssText=("color:green;border:1px solid gray;");

// div.append(p);
// // div.prepend(p);
// // div.before(p);
// // div.after(p);
// console.log(div);

window.addEventListener("contextmenu",(e)=>{
    // e.preventDefault();
    let isTrue=confirm("You Are Real Need  Browser Developer  Tools..");

    console.log(isTrue);
});

let form=document.getElementById("form");
let userName=document.getElementById("Name");
// console.log(userName);
// // console.log(form);
userName.addEventListener("input",(e)=>{
    console.log(userName.value);
})
;

userName.addEventListener("change",(e)=>{
    console.log(userName.value);
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("focus");

});

