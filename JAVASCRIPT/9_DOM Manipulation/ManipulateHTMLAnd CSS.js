//* Which thing we can Manipulate in HTML
//* TagName ❌ Read Only
//* Content or text of element ✅
//* HTML✅  
//* Attribute✅
//* Style✅

// let element=document.querySelector('h1');
// console.log(element);

//Changing it's style.
// element.style.backgroundColor='rgb(125, 86, 233)';
// element.style.fontFamily="Cambria"
// element.style.color="rgb(237, 240, 55)";
// element.style.visibility="hidden";


//* TagName ❌ it's Read only you can not changed it's tagName and it's nodeName property
// console.log(element.tagName);
// element.tagName='p';
// console.log(element.tagName);
// console.log(element.nodeName);
// element.nodeName='#text'
// console.log(element.nodeName);

//* Content or text of element✅
//* to access it's content or text which written inside  html element we use two property
//* innerText
//inner Text Property return a Actual text which visible on UI. How your content look in UI.
//* textContent
//textContent property return a Actual text content  how you write inside html file.


//* innerText Manipulate it.
//inner Text Property return a Actual text which visible on UI. How your content look in UI.
//using innerText you just can text which is visible on UI.
// console.log(element.innerText);
// element.innerText='BOM Manipulation';
// console.log(element.innerText);

//* textContent
//textContent property return a Actual text content  how you write inside html file.
//*if any element style visibility property set to hidden then it's not visible in UI but it's exist in html and textContent return actual content of the html document. it's ignore that.
//Using textContent you can change Text Content of the html.
// console.log(element.textContent);
// element.textContent="BOM                                         \n               Manipulation"
// console.log(element.textContent);


//* HTML✅
//* manipulate html of the element we use innerHTML property. 
//* innerHTML property return html content or actual HTML code which you write inside that particular element.
//* it's very useful or very powerful 
//*if any element style visibility property set to hidden then it's not visible in UI but it's exist in html and innerHTML return actual html code written inside that particular element of  the html document. it's ignore that.
//* using innerHTML you can change text which visible on UI, text content of the html and also html of the element.
// console.log(element.innerHTML);

//* Attribute✅

// console.log(element.attributes);
//* element.attributes this property return all present or which attribute set in html element it's return that Attribute in NameNodeMap.

//* using this way also you can access the value of the attribute.
// console.log(element.attributes.id.nodeValue)

//* to get value of the attribute we use a getAttribute() method it's take attribute name as arguments and return it's value.
//* if any attribute value not set then it's return empty string.false.
//* if Attribute present then it's return it's value.
//* if attribute not present then return null.
// console.log((element.getAttribute("id")));

//* to set the value of the any attribute we use setAttribute () method which take two arguments first is attribute name and second it's value.
//* if any attribute value already set then it's replace old value.
// console.log(element.setAttribute("class","h1"));
// console.log(element.getAttribute('class'));

//! Insert Element HTML using DOM

// //* createElement() method is used to create a HTML element using js. it's take name of html as argument and create that element and return it.
// let p =document.createElement("p"); 
// let p1 =document.createElement("p"); 
// let p2 =document.createElement("p"); 
// let p3 =document.createElement("p"); 
// p.innerText="new para 0";
// p.style.backgroundColor='red';
// p.style.color="black"

// p1.innerText="new para 1";
// p1.style.backgroundColor='red';
// p1.style.color="black"

// p2.innerText="new para 2";
// p2.style.backgroundColor='red';
// p2.style.color="black"

// p3.innerText="new para 3";
// p3.style.backgroundColor='red';
// p3.style.color="black"

// let content=document.querySelector(".content");
// console.log(content);

// //* append() can insert normal text,and element both thing . It's insert element inside element as last child of the element.
// content.append(p)
// console.log(content.childNodes[7]);

// //* prepend() can insert normal text,and element both thing . It's insert element inside element as first child of the element. 
// content.prepend(p1)
// console.log(content.childNodes[0]);

// //* before() can insert normal text,and element both thing . It's insert element outside element before element start.
// content.before(p2);
// console.log(content.parentNode.childNodes[1]);

// //* after() can insert normal text,and element both thing . It's insert element outside element after the ending of element.
// content.after(p3);
// console.log(content.parentNode.childNodes[3]);


// // content.insertAdjacentElement("afterbegin",p)
// // content.insertAdjacentElement("beforebegin",p1)
// // content.insertAdjacentElement("afterend",p2)
// // content.insertAdjacentElement("beforeend",p3)

// p.remove();
// p1.remove();
// p2.remove();
// p3.remove();



// let p4 =document.createElement("p");
// p4.innerHTML="I Don't Love you. I hate you";
// p4.style.backgroundColor="black";
// p4.style.color="green";

// let body =document.querySelector("body");
// body.append(p4);

// let btn=document.createElement("button");
// btn.style.backgroundColor="rgb(199,53,233)"
// btn.style.color='rgb(100,233,179)';
// btn.innerText="click";

// p4.prepend(btn);

// let p = document.querySelectorAll(".content > p")[1];
// let div = document.querySelector(".content");
// console.log(div);
// let p1=document.createElement("p");
// p1.innerText="New para added";
// p1.setAttribute("style","background-color : red; border:1px solid black");
// console.log(p.parentElement)
// div.insertBefore(p1,p);
// // let con=div.getAttribute("class");
// div.innerHTML="<p>HI how are you?</p>";
// div.setAttribute("class",`${con} box`);
// console.log(div.getAttribute("class"));

// let changeTagName = function (nodeName, newTagname) {
//         if ((nodeName && newTagname) && (nodeName instanceof Element)) {
//                 let newEle = document.createElement(`${newTagname}`);
//                 newEle.innerHTML = nodeName.innerHTML;
//                 let listAttribute =nodeName.attributes;
                
//                 let n = listAttribute.length;

//                 for (let i = 0; i < n; i++) {
        //                         // console.log(`${listAttribute[i].name}`,`${listAttribute[i].nodeValue}`)
        //                         newEle.setAttribute(`${listAttribute[i].name}`,`${listAttribute[i].nodeValue}`);
        //                 }
        //                 nodeName.replaceWith(newEle)
        //         } else {
                //                 console.error("Minimum two arguments are require.")
                //         }
                // }
                
                // let newEle=changeTagName(div, "p");

// let parent=div.parentElement;
// parent.replaceChild(newEle,div);


// let div = document.querySelector("#div");

// div.style.backgroundColor="red";
// div.style.color="white";
// div.style.fontSize="32px"

// div.setAttribute("style","background-color:white;font-size : 32px;color:blue");
// div.setAttribute("class","bgWhite");
// / console.log(div);
