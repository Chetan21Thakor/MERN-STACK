let sentence=prompt("Enter a Sentence ");
console.log(sentence);

let char=prompt("Enter a character");
console.log(char);

let charCount=0;
for (ch of sentence){
    if(ch == char){
        charCount++;
    }
}

console.log(charCount);

for (key in sentence){
    if(sentence[key] == char){
        console.log(key);
    }
}




