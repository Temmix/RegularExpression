/*
    MATCHING WORDS NEXT TO ANOTHER WORDS
*/

const first =
  "Let put several together different words more text and see what we can match";
const second =
  "Let put several different words more text together and see what we can match";

const regex = /\b(?:words\W+(?:\w+\W+){0,5}together)|(?:together\W+(?:\w+\W+){0,5}words)\b/;

console.log(first.match(regex));
console.log(second.match(regex));
