/*
    MATCH INFORMATION USING REGEX EXEC
*/

let words =
  "First number: 32, and a second number 100. Here is the last number 15.";
const matchInformation = /\d+/.exec(words);

console.log(
  `The index is ${matchInformation.length}, the length of the matched word is ${
    matchInformation[0].length
  } and the actual match is ${matchInformation[0]}`
);
