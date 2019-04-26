/*
        PASSWORD REGEX
        1 or more upper character
        1 or more lower character
        1 or more special character
        1 or more digits
        Total length of the password between 10 and 32
*/

const password = "Y0u490nokERnm_!!3WG";
const totalRegex = /^\S{10,32}$/;
const lowerRegex = /[a-z]+/;
const upperRegex = /[A-Z]+/;
const numberRegex = /\d+/;
const specialCxRegex = /[!@£$%^&*/()]/;

const allRegex = [
  totalRegex,
  lowerRegex,
  upperRegex,
  numberRegex,
  specialCxRegex
];

const response = allRegex.every(x => x.test(password));
console.log(response);
