// * 1. Using Double Quot (" ")
// * It'a very simple most widely used way of creating string in js.
let string="hi how are you?";

console.log(string , " type of String is : "+typeof string);

// * 2. Using single Quot (' ')
// *t'a very simple most widely used way of creating string in js.
let string1='What are you doing?';

console.log(string1 , " type of String1 is : "+typeof string1);

// * 3. Using Backticks (` `)
// *it'a used when you want to insert a variable or any expression in string.
// * A string which is created using a Backticks it's called "Template Literal" in javascript.
// * Template Literal is special way to creating string in js using Backticks.
// * You can easily insert any expression or variable in template literal using "${}" this space holder.
// * Inserting a Variable and Expression Direct in string it's called String interpolation.
let str=`I am fine`;

console.log(string1 , " type of String1 is : "+typeof string2);

let a =10 , b=20;

let sumStr=`sum of a + b  is : ${a + b }`;
console.log(sumStr);

// * 3. Using String("text")

let name =new String("Chetan");
console.log(name);


let n=name.length;
console.log(n);
// * Different loop on string

// * For in loop, give index of each character.
for(key in str){
    console.log(`index is ${key} , Character at index is ${str[key]}`);
}

// * for of loop , give a each character of string
for(ch of str){
    console.log(` Character at index is ${ch}`);
}

// normal loop
for(let i =0;i < str.length;i++){
    console.log(`index is ${i} , Character at index is ${str[i]}`);
}

// * Escape Sequence Character
// * What is Escape Sequence Character?
//*  it's special character which is combination of the two character but treated as one single character.

//*  for example

// * '\t' ,'\n' , '\\t' , '\\n ', '\\' , '\"' , ' \' '

console.log("Hi \nhow are?");
console.log("Hi \thow are?");
console.log("Hi \\nhow are?");
console.log("Hi \\t how are?");
console.log("Hi \"nhow are?");
console.log("Hi \'nhow are?");

// * A Properties is variable of the object.
let len=str.length;

// * A Method is Function of the object.

let firstName='Chetan'
let middleName=" dhanaji "
let lastName=`THAKOR`

//* this Method convert all character of the string to uppercase. it's return a new string. 
let upperCaseName=firstName.toUpperCase();
console.log(upperCaseName);

//* this Method convert all character of the string to lowercase. it's return a new string. 
let lowerCaseName=lastName.toLowerCase();
console.log(lowerCaseName);

// * this method remove white space from the ending  and starting of the string.
let trimMiddleName=middleName.trim();
console.log(trimMiddleName);

//* this Method concatenate one or multiple  string .it's return a new string. it's take strings as arguments which concatenate with src string.
let fullName=firstName.concat(middleName,lastName);
console.log(fullName);

let sentence = "I am boy.";

// * This take substring as argument then check given string is present in src string if yes then return True . If not present in src string then return false. 
let isContainWord=sentence.includes("boy");
console.log(isContainWord);
isContainWord=sentence.includes("girl");
console.log(isContainWord);

// * This take substring as argument then check given string is present in src string if yes then it's return a first present index of the substring. If not present in src string then return -1.
let indexOfWord=sentence.indexOf('boy');
console.log(indexOfWord);

indexOfWord=sentence.indexOf('loy');
console.log(indexOfWord);

// * This take index value as argument then if it's valid index for string the it's return a character present at this index.
// *it's not work on negative index.
// * if invalid index then it's return a empty string. 
// *if you are not pass any index as arguments then it's 0th index character.
let charAtIndex=sentence.charAt(6);
console.log(charAtIndex,typeof charAtIndex);
charAtIndex=sentence.charAt();
console.log(charAtIndex,typeof charAtIndex);
charAtIndex=sentence.charAt(100);
console.log(charAtIndex,typeof charAtIndex);

//* This method take two substring as arguments first substring is word which you want to replace in src string and seconde is substring is word which replace first substring. it's only first occurs of the first substring not all occurs of first substring. it's return new string as result.
let replaceWord=sentence.replace('boy','girl');
console.log(replaceWord);

sentence = "I am girl.I am girl.I am girl.";

//* This method take two substring as arguments first substring is word which you want to replace in src string and seconde is substring is word which replace first substring. it's only replace all occurs of the first substring. it's return new string as result.
 let replaceAllWord=sentence.replaceAll('girl','boy');
console.log(replaceAllWord);

sentence = "I am boy."

// * This method take two index value as argument first index value is starting pointe of slicing and seconde index value is end pointe of the slicing which excluded. 
// *it's substring of the string. 
//* it's also work on negative index. 
// *if you are not pass any index value then it's consider 0th as starting index and last+1 index as ending index.
// * if you are passing only starting index then it's take last index as ending index.
let sliceString=sentence.slice();
console.log(sliceString);


sliceString=sentence.slice(3);
console.log(sliceString);

sliceString=sentence.slice(-1);
console.log(sliceString);

// * if pass both invalid index then return empty string.
sliceString=sentence.slice(-1,-4);
console.log(sliceString.length);

let splitArr=sentence.split(" ").join(" ");
console.log(splitArr);










