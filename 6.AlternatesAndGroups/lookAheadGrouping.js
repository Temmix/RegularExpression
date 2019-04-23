/*
        LOOK AHEAD GROUPING USING  THIS  ?=
    This is not always part of the result but it enforces it to be present before it can be a match, s
    see below for an example, when you use ?= its a look ahead grouping which is not part of the result.
*/

const words = "allthingsjavascript.com youtube.com gmail.com and other sites";
const reg = /\w+(?=\.com)/g;

console.log(words.match(reg)); // this should give ['allthingsjavascript','youtube','gmail']

// VERIFY A PASSWORD OF 8 CHARACTERS, MIN OF (1 UPPERCASE, 1 LOWERCASE AND 1 NUMBER)
const passwordReg = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;

console.log(passwordReg.test("jkjdUHi1"));
