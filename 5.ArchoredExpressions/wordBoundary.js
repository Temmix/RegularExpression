/*
    \b : means non word character (space and most signs &*^%$£@)
    \B : means a word character
    \w : mean word character [A-Za-z0-9]
*/

const words = "Inplant this idea: plan to plant multiple trees on this planet";

console.log(words.match(/\bplan\b/g)); // this will match only plan
console.log(words.match(/\bplan/g)); // this will match plan of these (plan, plant and planet)
console.log(words.match(/plan/g)); // this will match plan of these (Inplant, plan, plant and planet)

console.log(words.match(/\Bplan\B/g)); // this will match only Inplant
console.log(words.match(/plan\B/g)); // this will match plan of these (Inplant, plant and planet)

// NOTE:  Remember to specify the start and end of a regex to write an accurate regex
/*
    Write a regex to match USA zip code 78934 or 78432-6675
*/

const regex = /^[0-9]{5}(-[0-9]{4})?$/g; // making use of specific start uses : ^,  end uses : $, grouping uses : () and optional uses:  ?

console.log("89763".match(regex));
console.log("89763-7865".match(regex));
