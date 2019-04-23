/** 
  To negate a particular character from the regex, we use the character ^
  if ^ start a regex without [], then it symbolises the begining of a regex.
*/

const words = "abcdefghijklm 45 - 99";

console.log(words.match(/[^a-i]/g));
console.log(words.match(/[^0-9]/g));
