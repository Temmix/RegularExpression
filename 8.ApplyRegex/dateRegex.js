/*
        DATE REGULAR EXPRESSION
*/

const first = "30/06/1966";
const second = "1/6/66";

const regex = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?[0-9]{2}$/;

console.log(regex.test(first));
console.log(regex.test(second));
