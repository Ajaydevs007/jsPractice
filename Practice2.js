// for(let i=1;i<=10;i++){
//     console.log(i*i);
// }
// // Given:
// let numbers:Array<number> = [10, 20, 30, 40];
// // 👉 Use forEach() to print each number.
// numbers.forEach((val)=>console.log(val))
// // Given:
// let fruits: Array<string> = ["apple", "banana", "mango"];
// // 👉 Use forEach() to print each fruit with its index number.
// // Output example: "0: apple"
// fruits.forEach((item, index) => {
//     console.log(index, item);
// })
// // Given:
// let nums: Array<number> = [1, 2, 3, 4, 5];
// // 👉 Use forEach() to print double of each number.
// nums.forEach((item) => {
//     console.log(item * 2);
// })
// // Given:
// let prices: Array<number> = [50, 100, 150];
// // 👉 Use forEach() to find and print the total sum.
// let totalSum: number = 0
// prices.forEach((val) => {
//     totalSum += val
// })
// console.log(totalSum);
// // Given:
// let names: Array<string> = ["ajay", "dev", "sam"];
// // 👉 Use forEach() to print each name in uppercase.
// names.forEach((val) => {
//     let name: string = val.toUpperCase()
//     console.log(name);
// })
// // Given:
// let numbers: Array<number> = [2, 5, 8, 11, 14, 17];
// // 👉 Use forEach() to count and print how many are even.
// let count:number=0
// numbers.forEach((num) => {
//     if (num % 2 == 0) {
//         count++
//         console.log(num);
//     }
// })
// console.log("total count of even number is ",count);
// // Given:
// let nums: Array<number> = [1, 2, 3, 4];
// // 👉 Use forEach() to create a new array called squares 
// // that stores the square of each number.
// // (Don't use map())
// const squares: Array<number> = []
// nums.forEach((val) => {
//     const square: number = val * val
//     squares.push(square)
// })
// console.log(squares);
// Given:
// let words:Array<string> = ["pen", "book", "laptop", "fan"];
// // 👉 Use forEach() to print only words longer than 4 letters.
// words.forEach((val)=>{
//     if(val.length>4){
//         console.log(val);
//     }
// })
// // Given:
// let marks:Array<number> = [80, 70, 90, 60];
// // 👉 Use forEach() to find the total and print 
// // "Total Marks: ___"
// var totalMarks:number=0
// marks.forEach((val)=>{
// totalMarks+=val
// })
// console.log("total marks ",totalMarks);
// Given:
var students = [
    { name: "Ajay", score: 85 },
    { name: "Dev", score: 92 },
    { name: "Sam", score: 76 }
];
// 👉 Use forEach() to print:
// "Ajay scored 85", "Dev scored 92", etc.
students.forEach(function (value) {
    console.log(value.name, "scored", value.score);
});
