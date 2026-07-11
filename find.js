// // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // // ########## Find FUnction find()  #############

// // // ########## find() কোনো condition-এর সঙ্গে মিলে যাওয়া প্রথম item বের করে।

// // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // const products = [
// //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// //     { id: 3, name: "Cap", price: 800, stock: 20 },
// //     { id: 4, name: "Pant", price: 1800, stock: 5 },
// //     { id: 5, name: "Watch", price: 3500, stock: 0 }
// // ];

// // //Search
// // const result = products.find(product => product.id === 3);

// // // Only Name
// // const results = products.find(product => product.id === 3);

// // // Price 2000-এর বেশি প্রথম product
// // const expensiveProduct = products.find(product => product.price > 2000);

// // //কোনো item না পেলে
// // const resultss = products.find(product => product.id === 10);

// // console.log(result);
// // console.log(results.name);
// // console.log(expensiveProduct);
// // console.log(resultss?.name);


// // Test

// // const products = [
// //     { id: 1, name: "Shirt", price: 1200, stock: 12, category: "clothing" },
// //     { id: 2, name: "Shoe", price: 2500, stock: 0, category: "footwear" },
// //     { id: 3, name: "Cap", price: 800, stock: 20, category: "accessory" },
// //     { id: 4, name: "Pant", price: 1800, stock: 5, category: "clothing" },
// //     { id: 5, name: "Watch", price: 3500, stock: 0, category: "accessory" },
// //     { id: 6, name: "Bag", price: 2200, stock: 8, category: "accessory" }
// // ];

// // const four = products.find(product => product.id === 4);
// // const watch = products.find(product => product.name === "Watch");
// // const stockZero = products.find(product => product.stock === 0);
// // const price = products.find(product => product.price > 2000);
// // const cat = products.find(product => product.category === "clothing");

// // //Product না পাওয়া গেলে message
// // const result = products.find(product => product.id === 20);

// // // .......
// // const nomatch = products.find(product => product.name === "Laptop");
// // if (nomatch) {
// //     console.log(nomatch)
// // } else {
// //     console.log("Fail to find");
// // }


// // console.log(four);
// // console.log(watch);
// // console.log(stockZero);
// // console.log(price);
// // console.log(cat);
// // console.log(result ?? "no item found")


// // bug fixing
// // const result = products.find(product =>
// //     product.id === 3
// // );



// // const result = products.find(product => product.name === "Cap");

// // const result = products.find(product => product.stock === 0);
// // console.log(result);

// // const users = [
// //     { id: 101, username: "rohan", password: "1234", active: true },
// //     { id: 102, username: "hasan", password: "5678", active: false },
// //     { id: 103, username: "karim", password: "abcd", active: true },
// //     { id: 104, username: "nayeem", password: "9999", active: true }
// // ];

// // const inputUsername = "karim";
// // const inputPassword = "abcd";

// // const missMatch = users.find(user => user.username === inputUsername && user.password === inputPassword);
// // if (!missMatch) {
// //     console.log()
// // }

// // console.log(missMatch ?? "Wrong username/Pass")

// // const orders = [
// //     { id: 201, customer: "Rohan", total: 1500, paid: false, city: "Dhaka" },
// //     { id: 202, customer: "Hasan", total: 3000, paid: true, city: "Sylhet" },
// //     { id: 203, customer: "Karim", total: 4500, paid: true, city: "Dhaka" },
// //     { id: 204, customer: "Nayeem", total: 2000, paid: true, city: "Dhaka" }
// // ];

// // const first = orders.find(order => order.paid && order.city === "Dhaka");


// // console.log(first ?? "Fail")

// const users = [
//     {
//         id: 101,
//         name: "Rohan",
//         email: "rohan@gmail.com",
//         active: true,
//         blocked: false
//     },
//     {
//         id: 102,
//         name: "Hasan",
//         email: "hasan@gmail.com",
//         active: true,
//         blocked: true
//     },
//     {
//         id: 103,
//         name: "Karim",
//         email: "karim@gmail.com",
//         active: false,
//         blocked: false
//     }
// ];

// const products = [
//     {
//         id: 1,
//         name: "Premium Shirt",
//         price: 1500,
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "Running Shoe",
//         price: 3200,
//         stock: 0
//     },
//     {
//         id: 3,
//         name: "Smart Watch",
//         price: 5500,
//         stock: 4
//     },
//     {
//         id: 4,
//         name: "Travel Bag",
//         price: 2200,
//         stock: 7
//     }
// ];

// const orders = [
//     {
//         id: 5001,
//         trackingCode: "TRK-1001",
//         userId: 101,
//         productId: 3,
//         quantity: 1,
//         paid: true,
//         deliveryStatus: "Processing"
//     },
//     {
//         id: 5002,
//         trackingCode: "TRK-1002",
//         userId: 102,
//         productId: 2,
//         quantity: 1,
//         paid: true,
//         deliveryStatus: "Pending"
//     },
//     {
//         id: 5003,
//         trackingCode: "TRK-1003",
//         userId: 103,
//         productId: 4,
//         quantity: 2,
//         paid: false,
//         deliveryStatus: "Pending"
//     }
// ];

// const agents = [
//     {
//         id: 1,
//         username: "admin",
//         password: "1234",
//         active: true
//     },
//     {
//         id: 2,
//         username: "support",
//         password: "5678",
//         active: false
//     }
// ];

// const inputUsername = "admin";
// const inputPassword = "1234";

// const inputTrackingCode = "TRK-1002";

// const login = agents.find(agent => agent.username === inputUsername && agent.password === inputPassword);
// if (!login) {
//     console.log("Invalid agent credentials");
// } else if (!login.active) {
//     console.log("Agent account inactive");
// } else {
//     console.log("Agent login successful");
// }

// const search = orders.find(order => order.trackingCode === inputTrackingCode);
// console.log(search ?? "Order not found")

// const id = 101;

// const customer = users.find(user => user.id === id);
// if (!customer) {
//     console.log("Customer record not found")
// } else if (customer.blocked) {
//     console.log("Customer account blocked")
// } else if (!customer.active) {
//     console.log("Customer account inactive")
// } else {
//     console.log("Customer verified: Rohan")
// }

// // Expert Bonus
// const advancedOrders = [
//     {
//         id: 7001,
//         trackingCode: "ADV-1001",
//         userId: 101,
//         items: [
//             { productId: 1, quantity: 2 },
//             { productId: 3, quantity: 1 }
//         ],
//         paid: true
//     }
// ];

// const find = advancedOrders.find(order => order.order)