// Given:
// let numbers: Array<number> = [1, 2, 3, 4];
// // 👉 Use map() to create a new array with each number doubled.
// // Expected: [2, 4, 6, 8]
// const res: Array<number> = numbers.map((val) => (
//     val * 2
// ))
// console.log(res);
// // Given:
// let names: Array<string> = ["ajay", "dev", "sam"];
// // 👉 Use map() to return a new array with names in uppercase.
// // Expected: ["AJAY", "DEV", "SAM"]
// const res:Array<string>=names.map((val)=>(val.toUpperCase()))
// console.log(res);
// // Given:
// let scores: Array<number>  = [10, 15, 20, 25];
// // 👉 Use map() to add 5 to each score.
// // Expected: [15, 20, 25, 30]
// const res:Array<number>=scores.map((item)=>(item+5))
// console.log(res);
// // Given:
// let words : Array<string>= ["pen", "book", "laptop"];
// // 👉 Use map() to return an array of word lengths.
// // Expected: [3, 4, 6]
// const res:Array<number>=words.map((val)=>(val.length))
// console.log(res);
// // Given:
// let values: Array<string | number | boolean | null> = [0, 1, "", "hello", null, true];
// // 👉 Use map() to return an array of true/false (Boolean) values.
// // Hint: Boolean(item)
// const res:Array<any>=values.map((val)=> Boolean(val))
// console.log(res);
// // Given:
// let users: Array<{ name: string, age: number }> = [
//     { name: "Ajay", age: 23 },
//     { name: "Dev", age: 25 },
//     { name: "Sam", age: 22 }
// ];
// // 👉 Use map() to return only the names as a new array.
// // Expected: ["Ajay", "Dev", "Sam"]
// const result: Array<string> = users.map((val) => (
//     val.name
// ))
// console.log(result);
// // Given:
// let nums:Array<number> = [2, 4, 6, 8];
// // 👉 Use map() to create a new array with each number squared.
// // Expected: [4, 16, 36, 64]
// const res:Array<number>=nums.map((val)=>(val*val))
// console.log(res);
// // Given:
// let names:Array<string> = ["Ajay", "Dev", "Sam"];
// // 👉 Use map() to add "Mr. " before each name.
// // Expected: ["Mr. Ajay", "Mr. Dev", "Mr. Sam"]
// const res:Array<string>=names.map((val)=>("Mr".concat(" ",val)))
// console.log(res);
// // Given:
// let marks:Array<number> = [45, 82, 60, 33, 91];
// // 👉 Use map() to return "Pass" if mark >= 50 else "Fail".
// // Expected: ["Fail", "Pass", "Pass", "Fail", "Pass"]
// const res:Array<string>=marks.map((val)=>(val>=50?"Pass":"fail"))
// console.log(res);
// Given:
var products = [
    { name: "pen", price: 10 },
    { name: "book", price: 50 },
    { name: "bag", price: 300 }
];
// 👉 Use map() to return a new array of strings like:
// ["pen - ₹10", "book - ₹50", "bag - ₹300"]
var res = products.map(function (val) { return val.name + "-" + "$" + val.price; });
console.log(res);
