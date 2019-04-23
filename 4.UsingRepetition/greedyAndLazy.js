/*
        + is Greedy
        ? is Lazy 
*/

const text = "<p> I am a paragrap </p> <p> I am a paragrap </p>";
const telephones = "32-6678-1, 45-668778-1, 65-454";

// Greedy
console.log(text.match(/<p>.+<\/p>/));
console.log(telephones.match(/\d{2}-\d{4,6}/g));

// Lazy
console.log(text.match(/<p>.+?<\/p>/));
console.log(telephones.match(/\d{2}-\d{4,6}?/g));
