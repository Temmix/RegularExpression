/*
        CAPTURING MATCH TEXT USING REGEX
*/

let words =
  "First number: 32, and a second number 100. Here is the last number 15.";
const regex = /\d+/g;

const total = words.match(regex).reduce((x, y) => +x + +y);
console.log(total);
