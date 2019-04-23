/*
        SPLITTING STRING WITH REGEX EXEC
*/

let givenDate = "2018/12/18";
let reg = /^(\d{4})[.-/](\d{1,2})[.-/](\d{1,2})$/;
const arr = reg.exec(givenDate);

if (reg.test(givenDate)) {
  let originalString = arr[0],
    year = arr[1],
    month = arr[2],
    day = arr[3];

  console.log(
    `The year is ${year}, while the month is ${month} and the day is ${day} from the given string ${originalString}`
  );
} else console.log("Wrong format");
