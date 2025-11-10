var products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 10, rating: 4.5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 25000, stock: 30, rating: 4.2 },
    { id: 3, name: "Keyboard", category: "Electronics", price: 2000, stock: 50, rating: 3.9 },
    { id: 4, name: "Shoes", category: "Fashion", price: 3000, stock: 25, rating: 4.0 },
    { id: 5, name: "Watch", category: "Fashion", price: 5000, stock: 5, rating: 4.7 },
    { id: 6, name: "Fridge", category: "Appliances", price: 45000, stock: 3, rating: 4.4 },
    { id: 7, name: "Washing Machine", category: "Appliances", price: 38000, stock: 7, rating: 4.3 },
    { id: 8, name: "TV", category: "Electronics", price: 52000, stock: 6, rating: 4.6 },
    { id: 9, name: "T-shirt", category: "Fashion", price: 1200, stock: 40, rating: 3.8 },
    { id: 10, name: "Microwave", category: "Appliances", price: 18000, stock: 9, rating: 4.1 }
];
// Print the name of every product in the list.
// products.forEach((item) => {
//     console.log(item.name);
// })
// Return an array that contains only the product names.
// const res:Array<string>=products.map((item)=>item.name)
// console.log(res);
// Create a new array that includes only the name and price of each product.
// const res=products.map((val)=>({name:val.name,price:val.price}))
// console.log(res);
// Get all the products that belong to the "Electronics" category.
// const res:Product[]=products.filter((val)=>(val.category=="Electronics"))
// console.log(res);
// Return all the products that have a rating greater than or equal to 4.5.
// const res:Product[]=products.filter((val)=>(val.rating>=4.5))
// console.log(res);
// Get all products with a price less than ₹10,000.
// const res=products.filter((item)=>(item.price<10000))
// console.log(res);
// Find the total number of products in stock (sum of all stock values).
// const res=products.reduce((prev,val)=>(prev+=val.stock),0)
// console.log(res);
// Get the first product that has a price above ₹50,000.
// const res:Product[]=products.find((item)=>(item.price>50000))
// console.log(res);
// Find the product named "Watch".
// const res=products.filter((item)=>(item.name==="Watch"))
// console.log(res);
// Check if any product has stock less than 5.
// const res=products.filter((val)=>val.stock<5)
// console.log(res);
// Check if all products have a rating greater than 3.5.
// const res=products.every((item)=>item.rating>3.5)
// console.log(res);
// Find the total value of all products (price × stock, summed together).
// const res=products.reduce((prev,val)=>(prev+val.price*val.stock),0)
// console.log(res);
// Find the average rating of all products.
// const total_rating=products.reduce((prev,val)=>(prev+=val.rating),0)
// const avgrating=total_rating/products.length
// console.log(avgrating);
// Get the most expensive product in the list.
// const res=products.reduce((prev,item)=>(prev.price>item.price?prev:item))
// console.log(res);
// Check if any Electronics product has a rating below 4.
// const res=products.some((item)=>(item.category=="Electronics" && item.rating<4))
// console.log(res);
// Create a new array where every product’s price is increased by 10%.
// const res = products.map((item) => ({
//   ...item,
//   price: item.price * 1.1 
// }));
// console.log(res);
// Get the names of all Appliances that have a price above ₹20,000.
// products.forEach((item)=>{
//     if(item.price>20000){
//         console.log(item.name);
//     }
// })
// Return a list of unique categories (no duplicates).
// const res = products
//   .map((item) => item.category)
//   .filter((value, index, arr) => arr.indexOf(value) === index);
// console.log(res);
// Find the average price of all Fashion category products.
// const avg=products.reduce((prev,item)=>(prev+=item.price),0)
// const avergprice=avg/products.length
// console.log(avergprice);
// Get names of all products that have stock less than 10.
products.filter(function (val) { return (val.stock < 10); }).forEach(function (item) {
    console.log(item.name);
});
// Sort all products by price (lowest to highest).
// Group all products by their category into an object.
// Find if there is any product that costs above ₹1,00,000.
// Check if every Fashion product has a rating above 3.5.
