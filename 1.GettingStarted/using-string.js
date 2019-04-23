let txt = "Programming courses always starts with a hello world example.";

let regex1 = /\s/; // this is how to use space as a delimiter
let regex2 = /world/;

//console.log(regex1.exec(txt));
//console.log(regex2.exec(txt));
// match, search, replace and split

console.log(txt.match(/hello/)); // this will produce same thing as RegExp exec method
console.log(txt.search(/hello/)); // this should give the index of the regex pattern
console.log(txt.replace(/hello/, "h!!")); // this should produce another string with replace pattern with the new word
console.log(txt.split(regex1)); // this will split the string into an array and using the pattern as delimiter
