let txt = "Programming courses always starts with a hello world example.";

let regex1 = new RegExp("hello");
let regex2 = /worlds/;

// test method returns boolean response
console.log(regex1.test(txt));
console.log(regex2.test(txt));

// exec method returns an array or null if no pattern found
console.log(regex1.exec(txt));
console.log(regex2.exec(txt));
