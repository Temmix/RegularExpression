/*
        TWITTER REGEX
*/

const handle = "@javascriptworld";
const reg = /^@?\w+$/g; // making @ optional, handle with or without @ will still be truthy
console.log(reg.test(handle));
