let text1 = `Each and every Tuesday, at the beginning of the day, 
we hold a staff meeting. At the Tuesday staff meeting, you will need 
to make a report on the past weeks progress, and you will receive 
assignments for the following Tuesday and Wednesday. Just be aware that somedays 
this Tuesday meeting might not occur. When that happens, 
we will make an announcement.`;

const reg = /\b[m,t,w,f,s][a-z]{1,4}[n,s,i,r]day/gi;

// Replace any day of the week in the text1 with Monday.

const text2 = text1.replace(reg, "Monday");

console.log(text2);
