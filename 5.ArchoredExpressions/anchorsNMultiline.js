/*
        ^ is used for the start of a multiline or a word
        $ is used for the end of a multiline or or a word
        i is for case insensitive
        g is for global 
        m is for multiline
*/

const word = `The dot is a very powerful regex metacharacter. It allows you to be lazy.
The problem is that the regex also matches in case where it should not match.
If you are new to regular expression, some of these cases may not be so obvious first lazy.`;

// Note for all these to match all, we must be in a multine mode. if not it only match the start and end regardless of the multiline

console.log(word.match(/^The/gim)); // this will match all at the begining in a newline
console.log(word.match(/lazy.$/gim)); // this will match last sentence per line in a multilne
