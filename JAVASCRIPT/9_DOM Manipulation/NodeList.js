console.log("hello from NodeList");

//! What is NodeList ?
//* When html converted into dom tree each and everything in dom represent as node . Collection of node or list of the node it's called "Node List".

//* it's very similar to array but not array.
//* it's a indices you can access it's element or node using index value.
//* it's iterable you can loop on it.
//* it's object .
//* it's One Iterable method forEach();
//* it's Entries(),value(),keys(); it's return a Array Iterator you can loop on it. it's not a array.
//* it's not hot loaded. it's most of the time static .  

let head=document.querySelectorAll('h1');

// console.log(head);

//* Node List has this for method and one length property.
let l1=head.entries();
let l2=head.values();
let l3=head.keys();
let l4=head.item('head');
console.log(l4)
let l5=head.length;

// console.log(l1)
for(let element of l3){
    console.log(element);
}


// let a = 1;

// a = {
//     x: 1,
//     valueOf: function () {
//         return this.x++;
//     }
// }

// if (a == 1 && a == 2 && a == 3) {
//     console.log("HI");
// } else {
//     console.log("no")
// }
