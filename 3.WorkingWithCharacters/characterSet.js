/**
    Let say you want to match gray or grey 
    let re = /gr y/, this will match any text gr.y but we need a or e in that space 
    let re = /gr[ae]y/g 

    [rh][abcdef][ i], this is to match one character from each [] e.g rai, he, ha ,re, 're ', 'he '

    Note we can not do a wildcard inside a character set like but outside the [] except - for range 
    /gr[ae]y[ .]/g,  this will only match 'gray ', the , on 'grey,' will not be returned
 */

let txt =
  "Make the outline for the square gray and the fill for the circle grey, but of the word graey.";
let regex = /gr[ae]y/g;
let regex2 = /[rh][abcdef][ i]/g;

console.log(txt.match(regex));
console.log(txt.match(regex2));
console.log(txt.match(/gr[ae]y[ .]/g));
