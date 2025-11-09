"use strict";
// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// // 👉 Use filter() to create a new array with only even numbers.
// // Expected output: [2, 4, 6]
// const result:number[]=numbers.filter((val)=>(val%2===0))
// console.log(result);
// let names: string[] = ["Ajay", "Dev", "Sam", "Rahul"];
// // 👉 Use filter() to get only names with more than 4 characters.
// const result:string[]=names.filter((val)=>val.length>4)
// console.log(result);
// let nums: number[] = [3, 7, 12, 18, 5, 25];
// // 👉 Use filter() to return only numbers greater than 10.
// const result:number[]=nums.filter((val)=>val>10)
// console.log(result);
// let values: any[] = [0, 1, "", "hello", null, undefined, true];
// // 👉 Use filter() to remove falsy values (like 0, "", null, undefined).
// const result=values.filter((value)=>(Boolean(value)==true))
// console.log(result);
// let fruits: string[] = ["apple", "mango", "kiwi", "grape"];
// // 👉 Use filter() to return only fruits that contain the letter "a".
// const result:string[]=fruits.filter((val)=>val.includes("a"))
// console.log(result);
// interface Person {
//   name: string;
//   age: number;
// }
// let people: Person[] = [
//   { name: "Ajay", age: 17 },
//   { name: "Dev", age: 22 },
//   { name: "Sam", age: 19 },
//   { name: "Rahul", age: 16 }
// ];
// // 👉 Use filter() to return only people aged 18 or above.
// const result:Person[]=people.filter((val)=>(val.age>18))
// console.log(result);
// interface Product {
//   name: string;
//   price: number;
// }
// let products: Product[] = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 150 },
//   { name: "Pencil", price: 5 },
//   { name: "Bag", price: 300 }
// ];
// // 👉 Use filter() to return only products priced below 100.
// const result:Product[]=products.filter((val)=>val.price<100
// )
// console.log(result);
// let students: string[] = ["Ajay", "Ishan", "Dev", "Om", "Rahul"];
// // 👉 Filter names starting with vowels (A, E, I, O, U)
// const result: string[] = students.filter((val) => {
//   const firstLetter = val[0].toLowerCase();
//   return ["a", "e", "i", "o", "u"].includes(firstLetter);
// });
// console.log(result);
// interface Student {
//   name: string;
//   marks: number;
// }
// let students: Student[] = [
//   { name: "Ajay", marks: 45 },
//   { name: "Dev", marks: 75 },
//   { name: "Sam", marks: 55 },
//   { name: "Rahul", marks: 35 }
// ];
// // 👉 Use filter() to return only students with marks >= 50.
// const result:Student[]=students.filter((val)=>(
//     val.marks>=50
// ))
// console.log(result);
// interface User {
//   username: string;
//   isActive: boolean;
// }
// let users: User[] = [
//   { username: "ajay", isActive: true },
//   { username: "dev", isActive: false },
//   { username: "sam", isActive: true }
// ];
// // 👉 Use filter() to return only active users.
// const result:User[]=users.filter((val)=>val.isActive===true)
// console.log(result);
