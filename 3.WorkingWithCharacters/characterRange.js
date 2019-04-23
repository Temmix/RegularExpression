/**
   A character range is specified by - 
    [a-e] a to e
    [1-7] 1 to 7
    [0-9][0-9]  means 0 - 99
 */

const words = "This is the 9 - 90, 1 - 5 and 45 - 99.";
console.log(words.match(/[1-9]/g));
console.log(words.match(/[0-9][0-9]/g));

console.log(words.match(/[a-zA-Z]/g));
// If you wanna match hyphen that is not for range
console.log(words.match(/[-,]./g));
