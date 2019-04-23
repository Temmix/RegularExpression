/*
    Validate phone numbers to make the following:
    (nnn)-nnn-nnnn
    nnn.nnn.nnnn
    nnn-nnn-nnnn
    (nnn)nnn-nnnn
    nnnnnnnnnn 
*/

const myRegex = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/;
const regex = /^((?=\()\(\d{3}\)|\d{3})[-.]?\d{3}[-.]?\d{4}/;

console.log(regex.test("(801)-234-3456"));
console.log(regex.test("801-234-3456"));
console.log(regex.test("(801).234.3456"));
console.log(regex.test("8012343456"));
console.log(regex.test("801.234.3456"));
