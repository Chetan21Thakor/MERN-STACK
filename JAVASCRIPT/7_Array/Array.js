let hey = () => {
  console.log("hi");
};

let arr = [
  1,
  2,
  3,
  "4",
  "hi how are you?",
  { name: "chetan", age: 21 },
  [1, 2, 3, 4, [1, 2, 3]],
  hey,
  true,
  null,
  undefined,
];
// console.table(arr[5]);

//* literal method
let emptyArr = [];
// console.log(emptyArr.length);

// let nums=[1,2,3,4];
// let color=["pink",'red',"black","yellow"];
// let pair=[[1,2],[3,4],[5,6],[7,8],[9,0]];
// let person=["chetan",24,"software engineer"];
// let mixedArray=[1,2,3,"4","hi how are you?",{name :"chetan",age:21},[1,2,3,4,[1,2,3,]],hey,true,null, undefined];

//* using constructor method

let array = Array(1, 2, 3);
let array1 = Array(20).fill(1);
let array2 = Array(20);

//* some Array useful function

let nums = [11, 122, 53, 44, 34];
let color = ["pink", "red", "black", "yellow"];
let pair = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 0],
];
let person = ["chetan", 24, "software engineer"];
let mixedArray = [
  1,
  2,
  3,
  "4",
  "hi how are you?",
  { name: "chetan", age: 21 },
  [1, 2, 3, 4, [1, 2, 3]],
  hey,
  true,
  null,
  undefined,
];

//* Array this method take index value as argument and return element or item present at that index.

// *it's not make any change in original array
// console.log(color.at(3));

//* Array this method take one or more then one item as arguments and add this item at end of the array and return new array length.

// *it's make any change in original array
// color.push("gray","blue");
// console.log(color);

//* Array this method not take any arguments it's just remove one item at the end of the array and return deleted item from Array.

// *it's make any change in original array
// color.pop();
// console.log(color);

//* Array this method take one or more then one item as arguments and add this item at starting position  of the array and return new array length.

// *it's make any change in original array
// color.unshift("Light Blue","Off Green");
// console.log(color);

//* Array this method not take any arguments it's just remove one item at the starting position of the array and return deleted item from Array.

// *it's make any change in original array
// color.shift();
// console.log(color);

// console.log(color);

//* Array this method is used to slice particular part of the array.

//* Array this method take started index or ending index value as arguments. starting index represent slicing is starting Point. starting index is include. ending index represent the endpoint of slicing. ending index not included.

//* it's also use negative indexing.

//* if just passing st ind then array it's automatic assume array length is ending index.

// *it's not make any change in original array. it's return new array of the slicing item.

let newArr = color.slice(2);
let newArr1 = color.slice(2, 3);

//* if  we pass same index then it's return empty array.
let newArr2 = color.slice(2, 2);

//* starting index value always smaller then ending index value then return desire output.
let newArr3 = color.slice();
// console.log(newArr3);

//* Array this method  is used to add and  remove  item from Array at particular index position . ti's very powerful.
//* negative index work.

// * this method take three arguments.
//* first is start position where you want add or remove element.
//* second is delete count how many item remove from array form starting position.
//* third is items one or more then one which you want to add from starting position.
color.splice(-3, 1, "Green", "Light Blue", "Orange", "White");
// console.log(color);

// console.log(color);

//* This method take one or more then one array as arguments and it's concatenate all the array in one single newArray.
//* this method not make any changes in original array. it's return new array.
let newArr4 = color.concat(nums, person);
// console.table(newArr4);

// * to concatenate a one or more then one array in one single array we use spread operator instead of this method.

let newArr5 = [...nums, ...person];
// console.table(newArr5);

//* this method take string  as arguments on this string bases it's join the array element and convert array into string.
//* it's not make a any changes in original array . it's return string.
let arrToStr = color.join(" ");
// console.log(arrToStr);

//* this method join the array element using , coma and convert array into string.
//* it's not make a any changes in original array . it's return string.
let arrToStr1 = color.toString();
// console.log(arrToStr1);

//* Array this method is used to find particular item present in array or not.
//* Array this method take two arguments second is starting index position where the searching of item start. first is a item which you want to search.
// * If item present in Array then return a true otherwise false.
//* not make changes in original array.

// console.log(color);

// console.log( color.includes('White',2));

//* Array this method is used to find particular item present in array or not. and return it's index value.
//* Array this method take two arguments second is starting index position where the searching of item start. first is a item which you want to search.
// * If item present in Array then return a it's index position otherwise -1.
//* not make changes in original array.

// console.log(color.indexOf("pink"));

//* make changes in original array.
//* reverse the position off the array element.
color.reverse();

// console.log(color);
//* sort method internally work on the Tim Sort.Combination of th Merge sort and Insertion sort.
//* it's proper work on string sorting and character sort. but it's not proper work on the number type. it's sort also in lexicographic order using ascii code of it.
// * to sort number you have to pass compare function. compare function sort a number in ascending order or in descending order. compare function take 2 arguments array element.
//* make changes in original array.
//* sort array element in ascending order. based  ascii code or lexicographic sort.
/*
-----------------------------------------------------------------------------------------------------
 ||  Return Value of the function ||    Meaning                   ||    Effect on  Order           ||
-----------------------------------------------------------------------------------------------------
 ||  🔻 Negative (< 0)            ||   a should come before b     ||   ✅ Keep order as-is        ||
 ||  🟰 Zero (=== 0)               ||   a and b are equal          ||  🤝 Keep their order(stable)  ||
 ||  🔺 Positive (> 0)            ||  a should come after b       ||  🔁 Swap a and b             ||
-----------------------------------------------------------------------------------------------------

*/

nums.sort((a, b) => {
  return b - a;
});
// console.log(nums);

// console.log(color);

// console.log(pair.flat());

/*

          ---------------------------------------------------------------------------------
           ||  Method          ||    Returns            ||    Modifies Original Array?   ||
          ---------------------------------------------------------------------------------
           ||   map()          ||   New array          || No                             ||
           ||   filter()       ||   New array          || No                             ||
           ||   reduce()       ||  Single value        || No                             ||
           ||   forEach()      ||  undefined           || No (unless you do it manually) ||
          ---------------------------------------------------------------------------------

*/

// * this method take a one function as argument. it's a higher order function.
// * this argument function take three argument
// * 1. Array each element
// * 2. Array each index
// * 3.  Entire Array
//* it's not make a any changes in original array.
//* it's basically used to  iterate on the array each element value or iterate the array each index and perform any operation on array each element and return the new element after performing a Operation.
//* it's store a new element in new array.

let newArr6 = color.map((element) => {
  return element.toUpperCase();
});

// console.log(newArr6);

// * this method take a one function as argument. it's a higher order function.
// * this argument function take three argument
// * 1. Array each element
// * 2. Array each index
// * 3. Entire Array
//* it's not make a any changes in original array.
//* it's used to filter out the specific array element from array which satisfies the condition of the argument function.
//* it's work on boolean value or we call tell truthy and falsy value.
let newArr7 = color.filter((element,ind,arr) => {
  return element.charAt(0) >= "A" && element.charAt(0) <= "Z";
  
});

// console.log(newArr7);


// * this method take a one function as argument. it's a higher order function.
// * this argument function take three argument
// * 1. Array each element
// * 2. Array each index
// * 3. Entire Array
//* it's not make any changes in original array and not return a new array .
//* it's used when you just want to iterate on the array element any perform some operation on array each element but not make change in original array.
color.forEach((element,ind,arr)=>{
  color[ind]=`${element.charAt(0).toUpperCase()}${element.slice(1)}`;
})

// console.log(color);

// * this method take a one function as argument. it's a higher order function.
// * this argument function take two argument
//* 1. Previous value or accumulator
//* 2. current value.

//* not make any changes in original array. not return new array

//* it's just return a one single value.

let sum=nums.reduce((previous,curr)=>{
  return previous+=curr;
},10);

console.log(sum)
