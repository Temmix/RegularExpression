const words = "this that hat h@t h*t h_t  h t hoot h&t";

// wildcard . represents any character including a tab but not newline
const regex = /h.t/g;

console.log(words.match(regex));

const text = "This could be a final text for now.";

//wildcard \ , this could be used to escape a word or to mean its literal meaning,see below
const regex2 = /w\./g; // want to match a w that is followed by ., this is not a wildcard here

console.log(text.match(regex2));
