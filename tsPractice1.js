// let grade: number = 1;
// if (grade >= 90 && grade <= 100) {
//   console.log("The grade is A+");
// } else if (grade >= 80 && grade < 90) {
//   console.log("The grade is A");
// } else if (grade >= 70 && grade < 80) {
//   console.log("The grade is B");
// } else if (grade >= 60 && grade < 70) {
//   console.log("The grade is C");
// } else if (grade >= 50 && grade < 60) {
//   console.log("The grade is D");
// } else if (grade < 50) {
//   console.log("The grade is F");
// } else {
//   console.log("Invalid Grade");
// }
// console.log(grade);
// let count: number = 25
// if (count % 15 === 0) {
//     console.log("fizzbuzz");
// }
// else if (count % 5 === 0) {
//     console.log("buzz");
// }
// else if (count % 3 === 0) {
//     console.log("fizz");
// }
// else {
//     console.log("none");
// }
// let count: number = 7
// if (count % 6 === 0) {
//     console.log(count * count);
// }
// else {
//     console.log(count * count * count);
// }
// let vowels: Array<string> = ["a", "e", "i", "o", "u"];
// let input = "a";
// let flag = false;
// for (let i of vowels) {
//     if (i === input) {
//         flag = true;
//         break;
//     }
// }
// if (flag) {
//     console.log(input + " is a vowel");
// } else {
//     console.log(input + " is not a vowel");
// }
// let count:number=5
// for(let i=1;i<=count;i++){
//     console.log("hello world");
// }
// for (let i=1;i<=10;i++){
//     console.log(i);  
// }
// for (let i=10;i>=1;i--){
//     console.log(i);
// }
// let multiple:number=2
// for(let i =1 ;i<=4;i++){
//     console.log(i*multiple);
// }
// for(let i=2;i<=8;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(i * i);
// }
// let range1: number = 25
// let range2: number = 50
// for (range1; range1 <= range2; range1++) {
//     if (range1 % 2 === 0) {
//         console.log(range1);
//     }
// }
// let range1: number = 25
// let range2: number = 50
// for(range1;range1<=range2;range1++){
//     if (range1%5===0) {
//         console.log(range1);
//     }
// }
// let num: number = 6
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }
// let num: number = 6
// for(let i=num;i>=1;i--){
//     if(num%i===0){
//         console.log(i);
//     }
// }
var num = 8;
if (num < 5) {
    console.log(num - 1);
}
else if (num > 5) {
    console.log(num + 1);
}
else {
    console.log("equal to 5");
}
