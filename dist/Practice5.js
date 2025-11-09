"use strict";
// let numbers: number[] = [1, 3, 7, 8, 10];
// // 👉 Use find() to get the first even number.
let cars = [
    { model: "Swift", year: 2018 },
    { model: "Baleno", year: 2021 },
    { model: "i20", year: 2023 }
];
// 👉 Use find() to return the first car made after 2020.
const res = cars.find((val) => val.year > 2020);
console.log(res);
