// let numbers: number[] = [5, 10, 15, 20];
// // 👉 Use reduce() to find the total sum.
// const res=numbers.reduce((prev,val)=>prev+val)
// console.log(res);
// let nums: number[] = [2, 3, 4];
// // 👉 Use reduce() to find the product of all numbers (2 × 3 × 4 = 24).
// const res=nums.reduce((prev,val)=>prev*val)
// console.log(res);
// let numbers: number[] = [5, 12, 8, 20, 3];
// // 👉 Use reduce() to find the maximum number.
// const res=numbers.reduce((prev,val)=>prev>val?prev:val)
// console.log(res);
// let numbers: number[] = [5, 12, 8, 20, 3];
// // 👉 Use reduce() to find the minimum number.
// const res=numbers.reduce((prev,val)=>prev<val?prev:val)
// console.log(res);
// let words: string[] = ["Hello", "World", "from", "Ajay"];
// // 👉 Use reduce() to combine them into one sentence.
// // Expected: "Hello World from Ajay"
// const res=words.reduce((prev,val)=>prev=prev + " " +val)
// console.log(res);
// interface Product {
//   name: string;
//   price: number;
// }
// let products: Product[] = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 50 },
//   { name: "Bag", price: 300 }
// ];
// // 👉 Use reduce() to calculate the total price.
// const res=products.reduce((prev,val)=>prev=prev+val.price,0)
// console.log(res);
// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// // 👉 Use reduce() to count how many numbers are even.
// const res = numbers.reduce((prev, val) => (
//     val % 2 == 0 ? prev + 1 : prev
// ), 0)
// console.log(res);
// interface Student {
//   name: string;
//   marks: number;
// }
// let students: Student[] = [
//   { name: "Ajay", marks: 85 },
//   { name: "Dev", marks: 90 },
//   { name: "Sam", marks: 75 }
// ];
// // 👉 Use reduce() to find the total marks.
// const res=students.reduce((prev,val)=>prev+=val.marks,0)
// console.log(res);
var nested = [
    [1, 2],
    [3, 4],
    [5, 6]
];
//  Use reduce() to flatten into a single array.
// Expected: [1, 2, 3, 4, 5, 6]
var flattened = nested.reduce(function (prev, val) {
    return prev.concat(val);
}, []);
console.log(flattened);
