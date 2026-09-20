console.log("Selecting of the HTML Element")


//* getElementsByTagName() method take one arguments name of the html element. 
// *it's return all the element which present with this same tag Name in html document. 
// *it's return  HTMLCollection.
let h1=document.getElementsByTagName('h1');
console.log(h1);

//* getElementsByClassName() method take one arguments value of the html element  class Attribute,value or name of class. 
// *it's return all the element which present with this same class Name in html document. 
// *it's return  HTMLCollection.
let content=document.getElementsByClassName("content");
console.log(content);


//* getElementById() method take one arguments value of the html element  Id Attribute value or name of id. 
// *it's return only one element which id name matched with first.
let div=document.getElementById("div");
console.log(div);


//* querySelector() method take one arguments name of the html element  or name of class , name of the id. any one from them. 
// *it's return only one element which id name,class name or tag name matched first with argument.
let element=document.querySelector('.content');
console.log(element)

//* querySelectorAll() method take one arguments name of the html element  or name of class , name of the id. any one from them. 
// *it's return all element which id name,class name or tag name matched first with argument.
//* it's return a Node List.
let element1=document.querySelectorAll('#div');
console.log(element1);