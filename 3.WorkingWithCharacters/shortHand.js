/**
        SHORT HAND IN REGEX
        \d  means [0-9]
        \w  means [a-zA-Z0-9_]
        \s  means [\t\r\n]

        \D  means [^0-9]
        \W  means [^a-zA-Z0-9_]
        \S  means [^\t\r\n]
 */

const words = "(12334)   []  abcde _ @";

console.log(words.match(/\d/g));
console.log(words.match(/\w/g));
console.log(words.match(/\s/g));

// NEGATIONS
console.log(words.match(/\D/g));
console.log(words.match(/\W/g));
console.log(words.match(/\S/g));
