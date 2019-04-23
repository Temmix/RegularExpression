/*
        +       Matches one or more occurences
        ?       Matches zero or one occurences
        *       Matches zero or more occurences
*/

const text =
  "She sells seashell on a seashore. The shells she sells are seashells, I am Sure";

// + Greedy Matches one or more occurences
console.log("warning".match(/warning!+/g));
console.log(text.match(/s[a-z]+/g));
console.log(text.match(/S[a-z]+/g));
console.log(text.match(/[A-Z][a-z]+/g));

// ?  Matches zero or one occurences
console.log("warning".match(/warning!?/g));
console.log(text.match(/s[a-z]?/g));
console.log(text.match(/S[a-z]?/g));
console.log(text.match(/[A-Z][a-z]?/g));

// *  Matches zero or more occurences
console.log("warning!!!!!!!!".match(/warning!*/g));
console.log(text.match(/s[a-z]*/g));
console.log(text.match(/S[a-z]*/g));
console.log(text.match(/[A-Z][a-z]*/g));
