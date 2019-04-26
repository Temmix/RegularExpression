/* 
        ITERATING OVER MATCHES USING REGEX EXEC
*/

let words =
  "First number: 32, and a second number 100. Here is the last number 15.";
const matchInformation = /\d+/.exec(words);

const regex = /\d+/g;
let match = null;
const arr = [];

while ((match = regex.exec(words))) {
  arr.push(match);
}

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
