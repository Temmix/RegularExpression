/**
     \t tab
     \v vertical tab
    \n newline
    \r carriage return
 */

const txt = `hot ht hot hit   h
 t`;

console.log(txt.match(/h\n/g));
console.log(txt.match(/\t/g)); // the tab is not working in mac, i will try windows to check :()
console.log(txt.match(/h./g));
