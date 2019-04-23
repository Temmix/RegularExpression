let txt =
  "Programming courses alwayS starts with a hello world example., Hello";
// flags are g: global, i: case insensitive, m: multiple-line match
let regex1 = /hello/gi;
let regex2 = /world/;

console.log(regex1.exec(txt));
console.log(regex1.exec(txt));

console.log(txt.match(/hello/gi));
console.log(txt.search(regex1));

//console.log(txt.match(regex1));
