// let person = {
//   name: "chetan",
//   age: 24,
//   isMarried: false,
//   "full Name": "Thakor Chetan",

//   showPerson:function(){
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.isMarried);
//     console.log(this["full Name"]);
//   }
// };

// let Array=[{name :"chetan", age:23},function(){console.log("hello from array")}];

// let [person1,arrFun]=Array;

// console.log(person1);
// arrFun();

// const {name , age}=person;
// console.log(`Name is : ${name} and age is : ${age}`);

// console.log(person);
// //Adding new property
// person.email="example22@gmail.com";
// person.city="Mumbai";
// console.log(person);

// //update the value of  property
// person.name="Charvi";
// person["full Name"]="Charvi Thakor";
// console.log(person);

// //delete property
// delete person.email;
// console.log(person);

// let obj1 = new Object({ name: "Charvi", age: 22, isMarried: false });

// // console.log(obj1, typeof obj1);

// let allThingObject = {
//   arr: [1, 2, 3, 4, 5],
//   obj: { name: "chetan" },
//   fun: function () {
//     console.log("hello from Object");
//   },
//   isBool: true,
//   number: 1233,
//   isNull: null,
//   isUndefined: undefined,
//   objOfObj: {
//     a: 1,
//     obj2: { b: 2 },
//   },
//   arrOfArr: [1, 2, [3, 4], 5, 6],
// };

//* Object some useful methods

let person = {
  1:1,
  name: "chetan",
  age: 24,
  isMarried: false,
  "full Name": "Thakor Chetan",

  showPerson: function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.isMarried);
    console.log(this["full Name"]);
  },
  editPerson: function (name, age) {
    this.name = name;
    this.age = age;
  },
};
// person.editPerson("Charvi",23);
// console.log(person);

// * this keys() method access using class "Object ".
//* this method take one object as argument  and ti's return array of all the keys in string which are present in object.
//*  To Get all the keys of the any object in form of the array. then you can use this method
let keys = Object.keys(person);

// console.log(keys);

// * this values() method access using class "Object ".
//* this method take one object as argument  and ti's return array of all the values of the keys  which are present in object.
//*  To Get all the values of the key any object in form of the array. then you can use this method

let values = Object.values(person);
// console.log(values);

// * this entries() method access using class "Object ".
//* this method take one object as argument  and ti's return all set of key : value pair in the form of array of array which are present in object.
//*  To Get all the set of key : value pair in the form of array of array which are present in object then you can use this method
let entries = Object.entries(person);

// console.log(entries);

let copyObj = {
  name: "Charvi",
  city: "Mumbai",
  showPerson: function () {
    console.log("hello from copy");
  },
};

// * this entries() method access using class "Object ".
//* This assign() method take two objects as arguments.
// * first is target object where you are want to copy a source object.
// * second is source object which copy in target object.
//* any property or method already define inside a target object then it's remain as it is.
//* if source object and target object both contain the same property or method then it's override this properties and method.
//* it's make changes in target object.
Object.assign(copyObj, person);
// console.log(copyObj);
// copyObj.showPerson();

// console.log(person);

// * this freeze() method access using class "Object ".
//* This freeze() method take one objects as arguments and make it Immutable. Means after Freezing object you can't perform any operation which make changes in original object.
//* for example
// * you can't add new property or method in object.
// * you can't update any  property or method  value in object.
// * you can't delete any  property or method  value in object.
// * but you can read only the property and method of object.
// Object.freeze(person);
// person.city="mumbai";
// person.name="Charvi";
// delete person.age;
// console.log(person);

//* This seal() method take one objects as arguments and seal that object. Means after sealing you can't add or delete  property or method of the object  but you can update it's value.
//* for example
// * you can't add new property or method in object.
// * you can't update any  property or method  value in object.
// * you can't delete any  property or method  value in object.
// * but you can read only the property and method of object.
// console.log(person);
// Object.seal(person);
// person.city="mumbai";
// delete person.age;
// person.name="Charvi";
// person.showPerson=function(){
//   console.log("hello from person");
// };

console.log(person);

//*this method take one key  as arguments and check that key is present in this particular object or not.
//* if key is present in object then return true  
//* if key is not present in object then return false  
console.log(person.hasOwnProperty(1));
