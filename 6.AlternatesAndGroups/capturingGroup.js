let str = "<strong>This is a strong tag </strong> <i>This is italic </i>";

let givenDate = "2018/12/12";
let reg = /^(\d{4})[.-/](\d{1,2})[.-/](\d{1,2})$/g;
let reg2 = /^(\d{4})([.-/])(\d{1,2})\2\3$/g; // you can alias the group by 1,2,3
let reg3 = /^(?:\d{4})([.-/])(\d{1,2})\1\2$/g; // ?: is used for non-capturing group
let reg4 = /<(\w+>)[\w\s]+<\/\1/g;

console.log(str.match(reg4));
console.log(reg3.exec(givenDate));
