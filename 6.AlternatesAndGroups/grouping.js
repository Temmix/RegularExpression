/*
        GROUPING IN REGEX
    Both parenthesis ( and ) are used for grouping in regular expression,
    let us set a rule below for a pattern like : 10 characters with first is between a - d and alternate be 1 - 5
*/

let words =
  "a5c3a2b1d1 a1e3a2b1a4 d5c3a2b1d1 aac3a2b1d1 a5c3a2b1d6 a5c312b1d1 d4b2a5b2d2";

let reg = /([a-d][1-5]){5}/gi; // Grouping is helping with repetition , if not for (), the regex will think [1-5] should be repeated 5 times.
console.log(words.match(reg));

let text1 = `Each and every Tuesday, at the beginning of the day, 
we hold a staff meeting. At the Tuesday staff meeting, you will need 
to make a report on the past weeks progress, and you will receive 
assignments for the following Tuesday and Wednesday. Just be aware that somedays 
this Tuesday meeting might not occur. When that happens, 
we will make an announcement.`;

// USING | TO SPECIFY OPTIONS EXPLICITLY , GROUPING AND BOUNDARY

const reg2 = /\b([a-z]{3}day|[a-z]{4}day|[a-z]{6}day|[a-z]{5}day)\b/gi;
const text2 = text1.replace(reg2, "Monday");
console.log(text2);
