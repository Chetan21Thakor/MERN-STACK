//! what is DOM ? WHY need a DOM?

//* it's method of the document object . it's access using document object only.
//it's can access using two notation dot notation and square notation.
//* it's take one arguments html element name which element you want to select as string.
// * it's return a collection of the element node  it's store in HTMLCollection.It's return a all the element which created using this name.

//! What is HTML Collection ?
//* HTML Collection is  list of item or it's collection of the element node.
//* it's hot loaded or dynamically changed when any changes done dom if any element add or deleted from dom.
//* it's iterable means you can access it's all element using index value.
//*It's not a array so you can not access array methods like map,filter and reduce.
// *  altimetry it's a object. IT's has different property and method.
//* you can use for in loop and  for of loop both.
//! for each not work ..


let h1 = document.getElementsByTagName("h1");
let h1_1 = document["getElementsByTagName"]("h1");
console.log(h1);

for (let element in h1){
    console.log(h1[element]);
}


//? HTML Collection item () method which take index value as arguments and return html element present that index. if invalid index then it's return null
console.log( h1.item(1));

//? HTML Collection namedItem () method take one argument which is name of the id attribute or name of the name attribute of html element. if invalid id attribute name of or name attribute name then it's return null

console.log( h1.namedItem('firstHeading'));