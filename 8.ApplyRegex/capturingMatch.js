/*
        CAPTURING MATCH TEXT USING REGEX
*/

let words =
  "First number: 32, and a second number 100. Here is the last number 15.";
const regex = /\d+/g;

console.log(words.match(regex));
