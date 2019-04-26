/*
        VARIETIES OF EMAIL REGEX
*/

const email = "something@domain.com";
const reg = /^(\w+)([@])(\w+)\.(\w{2,3})$/;
console.log(reg.test(email));
