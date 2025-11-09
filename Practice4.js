"use strict";
// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// // 👉 Use filter() to create a new array with only even numbers.
// // Expected output: [2, 4, 6]
let users = [
    { username: "ajay", isActive: true },
    { username: "dev", isActive: false },
    { username: "sam", isActive: true }
];
// 👉 Use filter() to return only active users.
const result = users.filter((val) => val.isActive === true);
console.log(result);
