"use strict";
// let numbers: number[] = [1, 3, 7, 8, 10];
// // 👉 Use find() to get the first even number.
let users = [
    { username: "ajay", isActive: true },
    { username: "dev", isActive: false },
    { username: "sam", isActive: false }
];
// 👉 Use find() to return the first user who is not active.
const res = users.find((val) => val.isActive === false);
console.log(res);
