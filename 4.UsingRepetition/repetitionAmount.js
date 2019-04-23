/*
    {min, max}  Matches min to max occurences
    {min}       Matches min occurences
    {min,}      Matches min or more occurences
*/

const text = "My telephone number is as follows: 801-555-6789";

console.log(text.match(/\w{3,5}/g));
console.log(text.match(/\w{3}/g));
console.log(text.match(/\w{3,}/g));

console.log(text.match(/\w{3}-\w{3}-\w{4}/g));
