/*
        SWITCHING FIRSTNAME AND LASTNAME
    Given an array consist of firstname and lastname, switch the firstname with the lastname using regular expression.
*/

let names = [
  "Temi, Makinde",
  "Yoyo, Murphy",
  "Olamide, Adesiyan",
  "Moses, Vipron",
  "Alex, Jusinca"
];

// Note dont use g flag with exec or test, it will throw away the match
let reg = /^(\w+),\s(\w+)/;

let response = names.map(x => {
  const data = reg.exec(x);
  return reg.test(x) ? `${data[2]}, ${data[1]}` : x;
});

console.log(response);
