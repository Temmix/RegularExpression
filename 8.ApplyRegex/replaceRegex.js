/*
        STRING REPLACE WITH REGEX
*/
let word = "<b>I am the text hahaha </b>";
const reg = /b>/g;
word = word.replace(reg, "strong>");

console.log(word);

// See below, Switch firstname with the lastname in the following array
// e.g Temi Makinde to Makinde Temi using replace and regex
let names = [
  "Smith, James",
  "Petterson, Alyssa",
  "Johnson, Lynette",
  "Lopez, Tony"
];

let newNames = names.map(x => x.replace(/(\w+), (\w+)/, `$2 - $1`)); // this is using grouping and returning the switched grouping
console.log(newNames);
