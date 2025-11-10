"use strict";
let numbers = [5, 10, 15, 20];
// 👉 Use reduce() to find the total sum.
const res = numbers.reduce((prev, val) => prev + val);
console.log(res);
