// const number = [10, 20, 30];

// const newNumbers = number.map(number => number + 5);

// console.log(newNumbers);

// const numbers = [10, 20, 30];

// const newNumbers = numbers.map(function (number) {
//     return number;
// });

// console.log(newNumbers);


// array.map(function (item) {
//     return item;
// });

// array.map(function (item) {
//     return item;
// })

// array.map(function (item) {
//     return item;
// })

// array.map(function (item) {

// })

// const numbers = [10, 20, 30];

// const result = numbers.map(function (number) {
//     return number;
// })

// console.log(result);

// const numbers = [10, 20, 30];

// const add = numbers.map(function (num) {
//     return num + 5;
// })

// console.log(add);

// const numbers = [10, 20, 30, 40];

// const add = numbers.map(function (num) {
//     return num * 5;
// })
// console.log(numbers);
// console.log(add);

// const products = ["Shirt", "Shoe", "Cap"];

// const result = products.map(function (product) {
//     return product + " Available";
// });

// console.log(result);

// const products = [
//     { name: "Shirt", price: 1200 },
//     { name: "Shoe", price: 2500 },
//     { name: "Cap", price: 800 }
// ];

// const names = products.map(function (product) {
//     return product.name;
// })

// const price = products.map(function (product) {
//     return product.price;
// })

// console.log(names);
// console.log(price);

// const result = numbers.map(function (number) {
//     return number * 2;
// })

// const result = numbers.map((number) => {
//     return number * 2;
// })

// const result = numbers.map(number => number * 2);

// const numbers = [5, 10, 15];

// const result = numbers.map(function (number) {
//     return number * 2;
// });

// console.log(result);

// const numbers = [15, 20, 25];

// const result = numbers.map(number => {
//     return number + 100;
// })

// const result = numbers.map(number => number + 100);

// console.log(result);


// const products = [
//     { name: "Shirt", price: 1200 },
//     { name: "Shoe", price: 2500 },
//     { name: "Cap", price: 800 }
// ];

// const result = products.map(product => product.name + " Available");

// console.log(result);

// const products = [
//     { name: "Shirt", price: 1200, discount: 200 },
//     { name: "Shoe", price: 2500, discount: 500 },
//     { name: "Cap", price: 800, discount: 100 }
// ];

// const finalPrice = products.map(product => product.price - product.discount);

// console.log(finalPrice);

// const numbers = [2, 4, 6];

// const result = numbers.map(number => number * 2);

// console.log(result);

// const prices = [100, 200, 300];

// const result = prices.map(price => price + 50);

// console.log(result);

// const names = ["Rohan", "Hasan", "Karim"];

// const greetings = names.map(name => "Hello " + name);

// console.log(greetings);

// const products = [
//     { name: "Bag", price: 1200 },
//     { name: "Watch", price: 3500 },
//     { name: "Cap", price: 800 }
// ];

// const result = products.map(product => product.name);
// console.log(result);


// const products = [
//     { name: "Bag", price: 1200 },
//     { name: "Watch", price: 3500 },
//     { name: "Cap", price: 800 }
// ];

// const result = products.map(product => product.price);

// console.log(result);

// const products = [
//     {
//         id: 1,
//         name: "Shirt",
//         price: 1200,
//         discount: 200,
//         category: "clothing",
//         stock: 12,
//         rating: 4.5,
//         tags: ["cotton", "summer", "casual"]
//     },
//     {
//         id: 2,
//         name: "Shoe",
//         price: 2500,
//         discount: 500,
//         category: "footwear",
//         stock: 0,
//         rating: 4.8,
//         tags: ["leather", "premium", "outdoor"]
//     },
//     {
//         id: 3,
//         name: "Cap",
//         price: 800,
//         discount: 100,
//         category: "accessory",
//         stock: 20,
//         rating: 4.1,
//         tags: ["summer", "casual"]
//     },
//     {
//         id: 4,
//         name: "Pant",
//         price: 1800,
//         discount: 300,
//         category: "clothing",
//         stock: 5,
//         rating: 4.3,
//         tags: ["denim", "casual", "regular"]
//     },
//     {
//         id: 5,
//         name: "Watch",
//         price: 3500,
//         discount: 700,
//         category: "accessory",
//         stock: 0,
//         rating: 4.9,
//         tags: ["premium", "metal", "gift"]
//     }
// ];


// const priceOnly = products.map(product => product.price - product.discount);

// const nameOnly = products.map(product => product.name);

// const stringOnly = products.map(product => product.price - product.discount)

// const stringFinal = products.map(product => product.name + " - ৳" + (product.price - product.discount));

// const result = products.map(product => ({ name: product.name, finalPrice: product.price - product.discount }));

// const res = products.map(product => ({ name: product.name, finalPrice: product.price - product.discount }));

// const final = products.map(product => ({ ...product, finalPrice: product.price - product.discount }));

// const available = products.map(product => ({ name: product.name, stockStatus: product.stock > 0 ? "Available" : "Out of Stock" }));

// const button = products.map(product => ({ name: product.name, buttonText: product.stock > 0 ? "Add to Cart" : "Out of Stock", buttonDisabled: product.stock === 0 }));



// console.log(result);
// console.log(priceOnly);
// console.log(nameOnly);
// console.log(stringFinal);
// console.log(result);
// console.log(res);
// console.log(final);
// console.log(available);
// console.log(button);


// const products = [
//     { id: 1, name: "Shirt", price: 1200, discount: 200, category: "clothing", stock: 12 },
//     { id: 2, name: "Shoe", price: 2500, discount: 500, category: "footwear", stock: 0 },
//     { id: 3, name: "Cap", price: 800, discount: 100, category: "accessory", stock: 20 },
//     { id: 4, name: "Pant", price: 1800, discount: 300, category: "clothing", stock: 5 },
//     { id: 5, name: "Watch", price: 3500, discount: 700, category: "accessory", stock: 0 }
// ];

// const productName = products.map(product => product.name);

// const productPrice = products.map(product => product.price - product.discount);

// const array = products.map(product => ({ name: product.name, finalPrice: product.price - product.discount }))

// const finalPrice = products.map(product => ({ ...product, finalPrice: product.price - product.discount }));

// const status = products.map(product => ({ name: product.name, status: product.stock ? 'Available' : 'Out of Stock' }));

// const button = products.map(product => ({ name: product.name, buttonText: product.stock > 0 ? 'Add to cart' : 'Out of Stock', disabled: product.stock === 0 }));

// console.log(productName);
// console.log(productPrice);
// console.log(array);
// console.log(finalPrice);
// console.log(status);
// console.log(button);



// ************ FILTER ***************

// const products = [
//     { id: 1, name: "Shirt", price: 1200, category: "clothing", stock: 12 },
//     { id: 2, name: "Shoe", price: 2500, category: "footwear", stock: 0 },
//     { id: 3, name: "Cap", price: 800, category: "accessory", stock: 20 },
//     { id: 4, name: "Pant", price: 1800, category: "clothing", stock: 5 },
//     { id: 5, name: "Watch", price: 3500, category: "accessory", stock: 0 }
// ];

// const availableProducts = products.filter(product => product.stock > 0);

// const outOfStockProducts = products.filter(product => product.stock === 0);

// const clothingProducts = products.filter(product => product.category === "clothing");

// const price1500 = products.filter(product => product.price > 1500);

// const result = products.filter(product => product.stock > 0 && product.price > 1000);

// console.log(availableProducts);
// console.log(outOfStockProducts);
// console.log(clothingProducts);
// console.log(price1500);
// console.log(result);


// ************ ForEach ***************

// const numbers = [10, 20, 30];

// numbers.forEach(number => {
//     console.log(number);
// });

// const products = ["Shirt", "Shoe", "Cap"];

// // **Normal function**
// products.forEach(function (product) {
//     console.log(product);
// })

// // **Arrow function**
// products.forEach(product => {
//     console.log(product);
// });

// products.forEach(product => {
//     console.log(product + ' Available');
// });


// // **** forEach() vs map() ****


// // **forEach**
// numbers.forEach(number => {
//     console.log(number + 5);
// });

// // **Map**

// const result = numbers.map((number => {
//     return number + 5;
// }));

// console.log(result);

// ## forEach() = শুধু কাজ করার জন্য ##
// ## map() = নতুন array বানানোর জন্য ##

const products = [
    { id: 1, name: "Shirt", price: 1200, stock: 12 },
    { id: 2, name: "Shoe", price: 2500, stock: 0 },
    { id: 3, name: "Cap", price: 800, stock: 20 }
];

products.forEach(product => {
    console.log(product.name);
    console.log(product.price);

})

//  ****** total calculate *******
let total = 0;

products.forEach(product => {
    total = total + product.price;
});

console.log(total);