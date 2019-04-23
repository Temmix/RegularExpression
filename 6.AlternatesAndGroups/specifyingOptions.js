let text1 = `Each and every Tuesday, at the beginning of the day, 
we hold a staff meeting. At the Tuesday staff meeting, you will need 
to make a report on the past weeks progress, and you will receive 
assignments for the following Tuesday and Wednesday. Just be aware that somedays 
this Tuesday meeting might not occur. When that happens, 
we will make an announcement.`;

// USING | TO SPECIFY OPTIONS EXPLICITLY

const reg = /\b[m,t,w,f,s][a-z]{1,4}[n,s,i,r]day/gi;
const reg2 = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/gi; // using pipe as or |
const reg3 = /\b[a-z]{3}day\b|\b[a-z]{4}day\b|\b[a-z]{6}day\b|\b[a-z]{5}day\b/gi;

// Replace any day of the week in the text1 with Monday.

const text2 = text1.replace(reg2, "Monday");
console.log(text2);

const text3 = text1.replace(reg3, "Monday");
console.log(text3);
