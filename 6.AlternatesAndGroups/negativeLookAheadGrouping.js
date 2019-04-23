/*
        NEGATIVE LOOK AHEAD GROUPING USING  THIS  ?!
    This is not always part of the result but it enforces it not to be present before it can be a match, 
    see below for an example, when you use ?! its a negative look ahead grouping which is not part of the result.
*/

// VERIFY A PASSWORD OF 8 CHARACTERS, MIN OF (1 UPPERCASE, 1 LOWERCASE AND WITH NO NUMBER/S)
const passwordReg = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9]).*$/;

console.log(passwordReg.test("jkjdUHi1"));
console.log(passwordReg.test("jkjdUHif"));
