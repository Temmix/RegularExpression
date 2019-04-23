/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. 
(The area code is the first 3 numbers.) and the other numbers must be in 801-nnn-nnnn
*/

let phoneNums = [
  "801-766-9754",
  "801-545-5454",
  "435-666-1212",
  "801-796-8010",
  "435-555-9801",
  "801-009-0909",
  "435-222-8013",
  "801-777-66559",
  "801-00A-0909",
  "435-222-8013",
  "801-777-665"
];

let regex = /^801-\d\d\d-\d\d\d\d$/g;
const list = phoneNums.filter(x => x.match(regex));
console.log(list);
