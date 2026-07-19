// // // // // // // // // // // const number = [10, 20, 30];

// // // // // // // // // // // const newNumbers = number.map(number => number + 5);

// // // // // // // // // // // console.log(newNumbers);

// // // // // // // // // // // const numbers = [10, 20, 30];

// // // // // // // // // // // const newNumbers = numbers.map(function (number) {
// // // // // // // // // // //     return number;
// // // // // // // // // // // });

// // // // // // // // // // // console.log(newNumbers);


// // // // // // // // // // // array.map(function (item) {
// // // // // // // // // // //     return item;
// // // // // // // // // // // });

// // // // // // // // // // // array.map(function (item) {
// // // // // // // // // // //     return item;
// // // // // // // // // // // })

// // // // // // // // // // // array.map(function (item) {
// // // // // // // // // // //     return item;
// // // // // // // // // // // })

// // // // // // // // // // // array.map(function (item) {

// // // // // // // // // // // })

// // // // // // // // // // // const numbers = [10, 20, 30];

// // // // // // // // // // // const result = numbers.map(function (number) {
// // // // // // // // // // //     return number;
// // // // // // // // // // // })

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const numbers = [10, 20, 30];

// // // // // // // // // // // const add = numbers.map(function (num) {
// // // // // // // // // // //     return num + 5;
// // // // // // // // // // // })

// // // // // // // // // // // console.log(add);

// // // // // // // // // // // const numbers = [10, 20, 30, 40];

// // // // // // // // // // // const add = numbers.map(function (num) {
// // // // // // // // // // //     return num * 5;
// // // // // // // // // // // })
// // // // // // // // // // // console.log(numbers);
// // // // // // // // // // // console.log(add);

// // // // // // // // // // // const products = ["Shirt", "Shoe", "Cap"];

// // // // // // // // // // // const result = products.map(function (product) {
// // // // // // // // // // //     return product + " Available";
// // // // // // // // // // // });

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Shirt", price: 1200 },
// // // // // // // // // // //     { name: "Shoe", price: 2500 },
// // // // // // // // // // //     { name: "Cap", price: 800 }
// // // // // // // // // // // ];

// // // // // // // // // // // const names = products.map(function (product) {
// // // // // // // // // // //     return product.name;
// // // // // // // // // // // })

// // // // // // // // // // // const price = products.map(function (product) {
// // // // // // // // // // //     return product.price;
// // // // // // // // // // // })

// // // // // // // // // // // console.log(names);
// // // // // // // // // // // console.log(price);

// // // // // // // // // // // const result = numbers.map(function (number) {
// // // // // // // // // // //     return number * 2;
// // // // // // // // // // // })

// // // // // // // // // // // const result = numbers.map((number) => {
// // // // // // // // // // //     return number * 2;
// // // // // // // // // // // })

// // // // // // // // // // // const result = numbers.map(number => number * 2);

// // // // // // // // // // // const numbers = [5, 10, 15];

// // // // // // // // // // // const result = numbers.map(function (number) {
// // // // // // // // // // //     return number * 2;
// // // // // // // // // // // });

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const numbers = [15, 20, 25];

// // // // // // // // // // // const result = numbers.map(number => {
// // // // // // // // // // //     return number + 100;
// // // // // // // // // // // })

// // // // // // // // // // // const result = numbers.map(number => number + 100);

// // // // // // // // // // // console.log(result);


// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Shirt", price: 1200 },
// // // // // // // // // // //     { name: "Shoe", price: 2500 },
// // // // // // // // // // //     { name: "Cap", price: 800 }
// // // // // // // // // // // ];

// // // // // // // // // // // const result = products.map(product => product.name + " Available");

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Shirt", price: 1200, discount: 200 },
// // // // // // // // // // //     { name: "Shoe", price: 2500, discount: 500 },
// // // // // // // // // // //     { name: "Cap", price: 800, discount: 100 }
// // // // // // // // // // // ];

// // // // // // // // // // // const finalPrice = products.map(product => product.price - product.discount);

// // // // // // // // // // // console.log(finalPrice);

// // // // // // // // // // // const numbers = [2, 4, 6];

// // // // // // // // // // // const result = numbers.map(number => number * 2);

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const prices = [100, 200, 300];

// // // // // // // // // // // const result = prices.map(price => price + 50);

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const names = ["Rohan", "Hasan", "Karim"];

// // // // // // // // // // // const greetings = names.map(name => "Hello " + name);

// // // // // // // // // // // console.log(greetings);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Bag", price: 1200 },
// // // // // // // // // // //     { name: "Watch", price: 3500 },
// // // // // // // // // // //     { name: "Cap", price: 800 }
// // // // // // // // // // // ];

// // // // // // // // // // // const result = products.map(product => product.name);
// // // // // // // // // // // console.log(result);


// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Bag", price: 1200 },
// // // // // // // // // // //     { name: "Watch", price: 3500 },
// // // // // // // // // // //     { name: "Cap", price: 800 }
// // // // // // // // // // // ];

// // // // // // // // // // // const result = products.map(product => product.price);

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 1,
// // // // // // // // // // //         name: "Shirt",
// // // // // // // // // // //         price: 1200,
// // // // // // // // // // //         discount: 200,
// // // // // // // // // // //         category: "clothing",
// // // // // // // // // // //         stock: 12,
// // // // // // // // // // //         rating: 4.5,
// // // // // // // // // // //         tags: ["cotton", "summer", "casual"]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 2,
// // // // // // // // // // //         name: "Shoe",
// // // // // // // // // // //         price: 2500,
// // // // // // // // // // //         discount: 500,
// // // // // // // // // // //         category: "footwear",
// // // // // // // // // // //         stock: 0,
// // // // // // // // // // //         rating: 4.8,
// // // // // // // // // // //         tags: ["leather", "premium", "outdoor"]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 3,
// // // // // // // // // // //         name: "Cap",
// // // // // // // // // // //         price: 800,
// // // // // // // // // // //         discount: 100,
// // // // // // // // // // //         category: "accessory",
// // // // // // // // // // //         stock: 20,
// // // // // // // // // // //         rating: 4.1,
// // // // // // // // // // //         tags: ["summer", "casual"]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 4,
// // // // // // // // // // //         name: "Pant",
// // // // // // // // // // //         price: 1800,
// // // // // // // // // // //         discount: 300,
// // // // // // // // // // //         category: "clothing",
// // // // // // // // // // //         stock: 5,
// // // // // // // // // // //         rating: 4.3,
// // // // // // // // // // //         tags: ["denim", "casual", "regular"]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 5,
// // // // // // // // // // //         name: "Watch",
// // // // // // // // // // //         price: 3500,
// // // // // // // // // // //         discount: 700,
// // // // // // // // // // //         category: "accessory",
// // // // // // // // // // //         stock: 0,
// // // // // // // // // // //         rating: 4.9,
// // // // // // // // // // //         tags: ["premium", "metal", "gift"]
// // // // // // // // // // //     }
// // // // // // // // // // // ];


// // // // // // // // // // // const priceOnly = products.map(product => product.price - product.discount);

// // // // // // // // // // // const nameOnly = products.map(product => product.name);

// // // // // // // // // // // const stringOnly = products.map(product => product.price - product.discount)

// // // // // // // // // // // const stringFinal = products.map(product => product.name + " - ৳" + (product.price - product.discount));

// // // // // // // // // // // const result = products.map(product => ({ name: product.name, finalPrice: product.price - product.discount }));

// // // // // // // // // // // const res = products.map(product => ({ name: product.name, finalPrice: product.price - product.discount }));

// // // // // // // // // // // const final = products.map(product => ({ ...product, finalPrice: product.price - product.discount }));

// // // // // // // // // // // const available = products.map(product => ({ name: product.name, stockStatus: product.stock > 0 ? "Available" : "Out of Stock" }));

// // // // // // // // // // // const button = products.map(product => ({ name: product.name, buttonText: product.stock > 0 ? "Add to Cart" : "Out of Stock", buttonDisabled: product.stock === 0 }));



// // // // // // // // // // // console.log(result);
// // // // // // // // // // // console.log(priceOnly);
// // // // // // // // // // // console.log(nameOnly);
// // // // // // // // // // // console.log(stringFinal);
// // // // // // // // // // // console.log(result);
// // // // // // // // // // // console.log(res);
// // // // // // // // // // // console.log(final);
// // // // // // // // // // // console.log(available);
// // // // // // // // // // // console.log(button);


// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, discount: 200, category: "clothing", stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, discount: 500, category: "footwear", stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, discount: 100, category: "accessory", stock: 20 },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, discount: 300, category: "clothing", stock: 5 },
// // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, discount: 700, category: "accessory", stock: 0 }
// // // // // // // // // // // ];

// // // // // // // // // // // const productName = products.map(product => product.name);

// // // // // // // // // // // const productPrice = products.map(product => product.price - product.discount);

// // // // // // // // // // // const array = products.map(product => ({ name: product.name, finalPrice: product.price - product.discount }))

// // // // // // // // // // // const finalPrice = products.map(product => ({ ...product, finalPrice: product.price - product.discount }));

// // // // // // // // // // // const status = products.map(product => ({ name: product.name, status: product.stock ? 'Available' : 'Out of Stock' }));

// // // // // // // // // // // const button = products.map(product => ({ name: product.name, buttonText: product.stock > 0 ? 'Add to cart' : 'Out of Stock', disabled: product.stock === 0 }));

// // // // // // // // // // // console.log(productName);
// // // // // // // // // // // console.log(productPrice);
// // // // // // // // // // // console.log(array);
// // // // // // // // // // // console.log(finalPrice);
// // // // // // // // // // // console.log(status);
// // // // // // // // // // // console.log(button);



// // // // // // // // // // // ************ FILTER ***************

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, category: "clothing", stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, category: "footwear", stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, category: "accessory", stock: 20 },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, category: "clothing", stock: 5 },
// // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, category: "accessory", stock: 0 }
// // // // // // // // // // // ];

// // // // // // // // // // // const availableProducts = products.filter(product => product.stock > 0);

// // // // // // // // // // // const outOfStockProducts = products.filter(product => product.stock === 0);

// // // // // // // // // // // const clothingProducts = products.filter(product => product.category === "clothing");

// // // // // // // // // // // const price1500 = products.filter(product => product.price > 1500);

// // // // // // // // // // // const result = products.filter(product => product.stock > 0 && product.price > 1000);

// // // // // // // // // // // console.log(availableProducts);
// // // // // // // // // // // console.log(outOfStockProducts);
// // // // // // // // // // // console.log(clothingProducts);
// // // // // // // // // // // console.log(price1500);
// // // // // // // // // // // console.log(result);


// // // // // // // // // // // ************ ForEach ***************

// // // // // // // // // // // const numbers = [10, 20, 30];

// // // // // // // // // // // numbers.forEach(number => {
// // // // // // // // // // //     console.log(number);
// // // // // // // // // // // });

// // // // // // // // // // // const products = ["Shirt", "Shoe", "Cap"];

// // // // // // // // // // // // **Normal function**
// // // // // // // // // // // products.forEach(function (product) {
// // // // // // // // // // //     console.log(product);
// // // // // // // // // // // })

// // // // // // // // // // // // **Arrow function**
// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     console.log(product);
// // // // // // // // // // // });

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     console.log(product + ' Available');
// // // // // // // // // // // });


// // // // // // // // // // // // **** forEach() vs map() ****


// // // // // // // // // // // // **forEach**
// // // // // // // // // // // numbers.forEach(number => {
// // // // // // // // // // //     console.log(number + 5);
// // // // // // // // // // // });

// // // // // // // // // // // // **Map**

// // // // // // // // // // // const result = numbers.map((number => {
// // // // // // // // // // //     return number + 5;
// // // // // // // // // // // }));

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // ## forEach() = শুধু কাজ করার জন্য ##
// // // // // // // // // // // ## map() = নতুন array বানানোর জন্য ##

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20 }
// // // // // // // // // // // ];

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     console.log(product.name);
// // // // // // // // // // //     console.log(product.price);

// // // // // // // // // // // })

// // // // // // // // // // // //  ****** total calculate *******
// // // // // // // // // // // let total = 0;

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     total = total + product.price;
// // // // // // // // // // // });

// // // // // // // // // // // console.log(total);


// // // // // // // // // // // //  ****** forEach Parameters *****

// // // // // // // // // // // array.forEach(item, index, fullarray => {

// // // // // // // // // // // });

// // // // // // // // // // // ******** Full array access *********

// // // // // // // // // // // const products = ["Shirt", "Shoe", "Cap"];

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     console.log(index + 1 + ". " + product);
// // // // // // // // // // // });

// // // // // // // // // // // products.forEach((product, index, array) => {

// // // // // // // // // // //     console.log(index);
// // // // // // // // // // //     console.log(product);
// // // // // // // // // // //     console.log(array);
// // // // // // // // // // // })



// // // // // // // // // // // const products = ["Shirt", "Shoe", "Cap"];


// // // // // // // // // // // // ****** Creating HTML ******

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     console.log('<li>${product}</li>');
// // // // // // // // // // // });

// // // // // // // // // // // //  *** With back ***
// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     console.log(`<li>${product}</li>`);
// // // // // // // // // // // });

// // // // // // // // // // // **** Condition ****

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20 }
// // // // // // // // // // // ];

// // // // // // // // // // // products.forEach((product) => {
// // // // // // // // // // //     if (product.stock > 0) {
// // // // // // // // // // //         console.log(product.name + ' Available');
// // // // // // // // // // //     } else {
// // // // // // // // // // //         console.log(product.name + ' Stock Out');
// // // // // // // // // // //     }
// // // // // // // // // // // });

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20 },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5 }
// // // // // // // // // // // ];

// // // // // // // // // // // products.forEach((product, index) => {

// // // // // // // // // // //     console.log(product.name);

// // // // // // // // // // //     console.log(product.name + ' - ' + '৳' + product.price);

// // // // // // // // // // //     console.log(index + 1 + '. ' + product.name)

// // // // // // // // // // //     if (product.stock > 0) {
// // // // // // // // // // //         console.log(product.name + ': ' + ' Available');
// // // // // // // // // // //     } else {
// // // // // // // // // // //         console.log(product.name + ':' + 'Stock Out');
// // // // // // // // // // //     };


// // // // // // // // // // // });

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20 },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5 }
// // // // // // // // // // // ];

// // // // // // // // // // // let total = 0;

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     total += product.price;
// // // // // // // // // // // })

// // // // // // // // // // // console.log(total);

// // // // // // // // // // // const numbers = [10, 20, 30];

// // // // // // // // // // // numbers.forEach((number, index) => {
// // // // // // // // // // //     numbers[index] = number + 5
// // // // // // // // // // // });

// // // // // // // // // // // console.log(numbers)

// // // // // // // // // // // const products = ["Shirt", "Shoe", "Cap"];

// // // // // // // // // // // const result = [];

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     result.push(product + " Available");
// // // // // // // // // // // });

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20 },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5 }
// // // // // // // // // // // ];

// // // // // // // // // // // let total = 0;
// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     total += product.price;
// // // // // // // // // // // })
// // // // // // // // // // // console.log(total);

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     if (product.stock > 0) {
// // // // // // // // // // //         console.log(product.name + ' Available');
// // // // // // // // // // //     } else {
// // // // // // // // // // //         console.log(product.name + ' Stock Out');
// // // // // // // // // // //     };
// // // // // // // // // // // });


// // // // // // // // // // // let res = [];

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     res.push(product.name);
// // // // // // // // // // // });

// // // // // // // // // // // console.log(res);

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     products[index].price = product.price + 100;
// // // // // // // // // // // });

// // // // // // // // // // // console.log(products);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12, category: "clothing" },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0, category: "footwear" },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20, category: "accessory" },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5, category: "clothing" },
// // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, stock: 0, category: "accessory" }
// // // // // // // // // // // ];

// // // // // // // // // // // const total = 0;

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     products[index]
// // // // // // // // // // // })

// // // // // // // // // // // console.log(products)

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Bag", price: 1200 },
// // // // // // // // // // //     { name: "Watch", price: 3500 },
// // // // // // // // // // //     { name: "Cap", price: 800 }
// // // // // // // // // // // ];

// // // // // // // // // // // const result = products.map(product => {
// // // // // // // // // // //     return product.price;
// // // // // // // // // // // })

// // // // // // // // // // // const no = products.map(product => product.price)

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { name: "Shirt", price: 1200, discount: 200 },
// // // // // // // // // // //     { name: "Shoe", price: 2500, discount: 500 },
// // // // // // // // // // //     { name: "Cap", price: 800, discount: 100 }
// // // // // // // // // // // ];

// // // // // // // // // // // const result = products.map(product => product.price - product.discount);
// // // // // // // // // // // const total = products.map((product => { product.name - product.price - product.discount }));

// // // // // // // // // // // console.log(result);
// // // // // // // // // // // console.log(total);


// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12, category: "clothing" },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0, category: "footwear" },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20, category: "accessory" },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5, category: "clothing" },
// // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, stock: 0, category: "accessory" }
// // // // // // // // // // // ];


// // // // // // // // // // // let total = 0;

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     total += products[index].price;
// // // // // // // // // // // });

// // // // // // // // // // // console.log(total);

// // // // // // // // // // // const products = [
// // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12, category: "clothing" },
// // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0, category: "footwear" },
// // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20, category: "accessory" },
// // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5, category: "clothing" },
// // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, stock: 0, category: "accessory" }
// // // // // // // // // // // ];

// // // // // // // // // // // // const result = products.map(product => product.price + 100);
// // // // // // // // // // // // const res = products.map(product => {
// // // // // // // // // // // //     return product.name + ' - ৳' + (product.price + 100);
// // // // // // // // // // // // })
// // // // // // // // // // // // ##################################################################
// // // // // // // // // // // // ######## @@@@@      Object array result     @@@@@@ ###############
// // // // // // // // // // // // ##################################################################
// // // // // // // // // // // // const aray = products.map(product => ({ name: product.name, Updatedprice: product.price + 100 }))

// // // // // // // // // // // // console.log(result);
// // // // // // // // // // // // console.log(res);
// // // // // // // // // // // // console.log(aray);


// // // // // // // // // // // // ##################################################################
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // // ######## @@@@@      arrow function-এ parameter ২টা হলে () দিতে হয়।
// // // // // // // // // // // // ########            ১টা parameter হলে () না দিলেও চলে
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // // @@@@@@ ###########################################################
// // // // // // // // // // // // ##################################################################

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     console.log((index + 1) + ". " + product.name + " - ৳" + product.price);
// // // // // // // // // // // });

// // // // // // // // // // // let total = 0;

// // // // // // // // // // // products.forEach(product =>
// // // // // // // // // // //     total += product.price
// // // // // // // // // // // );

// // // // // // // // // // // console.log(total);

// // // // // // // // // // // products.forEach(product => {
// // // // // // // // // // //     if (product.stock > 0) {
// // // // // // // // // // //         console.log(product.name + ' Available')
// // // // // // // // // // //     }
// // // // // // // // // // // });

// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     console.log(products[index].price + 100);
// // // // // // // // // // // })



// // // // // // // // // // // const result = products.map((product, index) => {
// // // // // // // // // // //     return (index + 1) + ". " + product.name;
// // // // // // // // // // // });

// // // // // // // // // // // console.log(result);

// // // // // // // // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // // // // // // // // // // // ########## (product, index) => console.log(product.name) #############
// // // // // // // // // // // // #########  কিন্তু যদি একাধিক line হয়, তখন {} দিতে হবে     ############
// // // // // // // // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// // // // // // // // // // // //   ${product.name}    এটা current product-এর name দেখায়।

// // // // // // // // // // // // Single
// // // // // // // // // // // products.forEach((product, index) =>
// // // // // // // // // // //     console.log(`${index + 1}. ${product.name} - ৳${product.price}`)
// // // // // // // // // // // );

// // // // // // // // // // // // Multiple
// // // // // // // // // // // products.forEach((product, index) => {
// // // // // // // // // // //     const serial = index + 1;
// // // // // // // // // // //     console.log(`${serial}. ${product.name} - ৳${product.price}`);
// // // // // // // // // // // });


// // // // // // // // // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // // // // // // // // // // // // ########## Find FUnction find()  #############

// // // // // // // // // // // // // ########## find() কোনো condition-এর সঙ্গে মিলে যাওয়া প্রথম item বের করে।

// // // // // // // // // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // // // // // // // // // // // const products = [
// // // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12 },
// // // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0 },
// // // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20 },
// // // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5 },
// // // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, stock: 0 }
// // // // // // // // // // // // ];

// // // // // // // // // // // // //Search
// // // // // // // // // // // // const result = products.find(product => product.id === 3);

// // // // // // // // // // // // // Only Name
// // // // // // // // // // // // const results = products.find(product => product.id === 3);

// // // // // // // // // // // // // Price 2000-এর বেশি প্রথম product
// // // // // // // // // // // // const expensiveProduct = products.find(product => product.price > 2000);

// // // // // // // // // // // // //কোনো item না পেলে
// // // // // // // // // // // // const resultss = products.find(product => product.id === 10);

// // // // // // // // // // // // console.log(result);
// // // // // // // // // // // // console.log(results.name);
// // // // // // // // // // // // console.log(expensiveProduct);
// // // // // // // // // // // // console.log(resultss?.name);


// // // // // // // // // // // // Test

// // // // // // // // // // // // const products = [
// // // // // // // // // // // //     { id: 1, name: "Shirt", price: 1200, stock: 12, category: "clothing" },
// // // // // // // // // // // //     { id: 2, name: "Shoe", price: 2500, stock: 0, category: "footwear" },
// // // // // // // // // // // //     { id: 3, name: "Cap", price: 800, stock: 20, category: "accessory" },
// // // // // // // // // // // //     { id: 4, name: "Pant", price: 1800, stock: 5, category: "clothing" },
// // // // // // // // // // // //     { id: 5, name: "Watch", price: 3500, stock: 0, category: "accessory" },
// // // // // // // // // // // //     { id: 6, name: "Bag", price: 2200, stock: 8, category: "accessory" }
// // // // // // // // // // // // ];

// // // // // // // // // // // // const four = products.find(product => product.id === 4);
// // // // // // // // // // // // const watch = products.find(product => product.name === "Watch");
// // // // // // // // // // // // const stockZero = products.find(product => product.stock === 0);
// // // // // // // // // // // // const price = products.find(product => product.price > 2000);
// // // // // // // // // // // // const cat = products.find(product => product.category === "clothing");

// // // // // // // // // // // // //Product না পাওয়া গেলে message
// // // // // // // // // // // // const result = products.find(product => product.id === 20);

// // // // // // // // // // // // // .......
// // // // // // // // // // // // const nomatch = products.find(product => product.name === "Laptop");
// // // // // // // // // // // // if (nomatch) {
// // // // // // // // // // // //     console.log(nomatch)
// // // // // // // // // // // // } else {
// // // // // // // // // // // //     console.log("Fail to find");
// // // // // // // // // // // // }


// // // // // // // // // // // // console.log(four);
// // // // // // // // // // // // console.log(watch);
// // // // // // // // // // // // console.log(stockZero);
// // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // console.log(cat);
// // // // // // // // // // // // console.log(result ?? "no item found")


// // // // // // // // // // // // bug fixing
// // // // // // // // // // // // const result = products.find(product =>
// // // // // // // // // // // //     product.id === 3
// // // // // // // // // // // // );



// // // // // // // // // // // // const result = products.find(product => product.name === "Cap");

// // // // // // // // // // // // const result = products.find(product => product.stock === 0);
// // // // // // // // // // // // console.log(result);

// // // // // // // // // // // // const users = [
// // // // // // // // // // // //     { id: 101, username: "rohan", password: "1234", active: true },
// // // // // // // // // // // //     { id: 102, username: "hasan", password: "5678", active: false },
// // // // // // // // // // // //     { id: 103, username: "karim", password: "abcd", active: true },
// // // // // // // // // // // //     { id: 104, username: "nayeem", password: "9999", active: true }
// // // // // // // // // // // // ];

// // // // // // // // // // // // const inputUsername = "karim";
// // // // // // // // // // // // const inputPassword = "abcd";

// // // // // // // // // // // // const missMatch = users.find(user => user.username === inputUsername && user.password === inputPassword);
// // // // // // // // // // // // if (!missMatch) {
// // // // // // // // // // // //     console.log()
// // // // // // // // // // // // }

// // // // // // // // // // // // console.log(missMatch ?? "Wrong username/Pass")

// // // // // // // // // // // // const orders = [
// // // // // // // // // // // //     { id: 201, customer: "Rohan", total: 1500, paid: false, city: "Dhaka" },
// // // // // // // // // // // //     { id: 202, customer: "Hasan", total: 3000, paid: true, city: "Sylhet" },
// // // // // // // // // // // //     { id: 203, customer: "Karim", total: 4500, paid: true, city: "Dhaka" },
// // // // // // // // // // // //     { id: 204, customer: "Nayeem", total: 2000, paid: true, city: "Dhaka" }
// // // // // // // // // // // // ];

// // // // // // // // // // // // const first = orders.find(order => order.paid && order.city === "Dhaka");


// // // // // // // // // // // // console.log(first ?? "Fail")

// // // // // // // // // // // const users = [
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 101,
// // // // // // // // // // //         name: "Rohan",
// // // // // // // // // // //         email: "rohan@gmail.com",
// // // // // // // // // // //         active: true,
// // // // // // // // // // //         blocked: false
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 102,
// // // // // // // // // // //         name: "Hasan",
// // // // // // // // // // //         email: "hasan@gmail.com",
// // // // // // // // // // //         active: true,
// // // // // // // // // // //         blocked: true
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 103,
// // // // // // // // // // //         name: "Karim",
// // // // // // // // // // //         email: "karim@gmail.com",
// // // // // // // // // // //         active: false,
// // // // // // // // // // //         blocked: false
// // // // // // // // // // //     }
// // // // // // // // // // // ];

// // // // // // // // // // // const products = [
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 1,
// // // // // // // // // // //         name: "Premium Shirt",
// // // // // // // // // // //         price: 1500,
// // // // // // // // // // //         stock: 10
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 2,
// // // // // // // // // // //         name: "Running Shoe",
// // // // // // // // // // //         price: 3200,
// // // // // // // // // // //         stock: 0
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 3,
// // // // // // // // // // //         name: "Smart Watch",
// // // // // // // // // // //         price: 5500,
// // // // // // // // // // //         stock: 4
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 4,
// // // // // // // // // // //         name: "Travel Bag",
// // // // // // // // // // //         price: 2200,
// // // // // // // // // // //         stock: 7
// // // // // // // // // // //     }
// // // // // // // // // // // ];

// // // // // // // // // // // const orders = [
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 5001,
// // // // // // // // // // //         trackingCode: "TRK-1001",
// // // // // // // // // // //         userId: 101,
// // // // // // // // // // //         productId: 3,
// // // // // // // // // // //         quantity: 1,
// // // // // // // // // // //         paid: true,
// // // // // // // // // // //         deliveryStatus: "Processing"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 5002,
// // // // // // // // // // //         trackingCode: "TRK-1002",
// // // // // // // // // // //         userId: 102,
// // // // // // // // // // //         productId: 2,
// // // // // // // // // // //         quantity: 1,
// // // // // // // // // // //         paid: true,
// // // // // // // // // // //         deliveryStatus: "Pending"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 5003,
// // // // // // // // // // //         trackingCode: "TRK-1003",
// // // // // // // // // // //         userId: 103,
// // // // // // // // // // //         productId: 4,
// // // // // // // // // // //         quantity: 2,
// // // // // // // // // // //         paid: false,
// // // // // // // // // // //         deliveryStatus: "Pending"
// // // // // // // // // // //     }
// // // // // // // // // // // ];

// // // // // // // // // // // const agents = [
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 1,
// // // // // // // // // // //         username: "admin",
// // // // // // // // // // //         password: "1234",
// // // // // // // // // // //         active: true
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //         id: 2,
// // // // // // // // // // //         username: "support",
// // // // // // // // // // //         password: "5678",
// // // // // // // // // // //         active: false
// // // // // // // // // // //     }
// // // // // // // // // // // ];

// // // // // // // // // // // const inputUsername = "admin";
// // // // // // // // // // // const inputPassword = "1234";

// // // // // // // // // // // const inputTrackingCode = "TRK-1002";

// // // // // // // // // // // const login = agents.find(agent => agent.username === inputUsername && agent.password === inputPassword);
// // // // // // // // // // // if (!login) {
// // // // // // // // // // //     console.log("Invalid agent credentials");
// // // // // // // // // // // } else if (!login.active) {
// // // // // // // // // // //     console.log("Agent account inactive");
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("Agent login successful");
// // // // // // // // // // // }

// // // // // // // // // // // const search = orders.find(order => order.trackingCode === inputTrackingCode);
// // // // // // // // // // // console.log(search ?? "Order not found")

// // // // // // // // // // // const id = 101;

// // // // // // // // // // // const customer = users.find(user => user.id === id);
// // // // // // // // // // // if (!customer) {
// // // // // // // // // // //     console.log("Customer record not found")
// // // // // // // // // // // } else if (customer.blocked) {
// // // // // // // // // // //     console.log("Customer account blocked")
// // // // // // // // // // // } else if (!customer.active) {
// // // // // // // // // // //     console.log("Customer account inactive")
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("Customer verified: Rohan")
// // // // // // // // // // // }



// // // // // // // // // // // Expert Bonus
// // // // // // // // // // const advancedOrders = [
// // // // // // // // // //     {
// // // // // // // // // //         id: 7001,
// // // // // // // // // //         trackingCode: "ADV-1001",
// // // // // // // // // //         userId: 101,
// // // // // // // // // //         items: [
// // // // // // // // // //             { productId: 1, quantity: 2 },
// // // // // // // // // //             { productId: 3, quantity: 1 }
// // // // // // // // // //         ],
// // // // // // // // // //         paid: true
// // // // // // // // // //     }
// // // // // // // // // // ];

// // // // // // // // // // advancedOrders             // সব orders
// // // // // // // // // // advancedOrders[0]          // প্রথম order
// // // // // // // // // // advancedOrders[0].items    // প্রথম order-এর items array
// // // // // // // // // // advancedOrders[0].items[0] // প্রথম item

// // // // // // // // // // // console.log(advancedOrders[0].items[0])

// // // // // // // // // // // // প্রত্যেক order-এর ভেতরের items দেখানো
// // // // // // // // // // // // advancedOrders.forEach(order => {
// // // // // // // // // // // //     order.items.forEach(item => {
// // // // // // // // // // // //         console.log(item.productId);
// // // // // // // // // // // //         console.log(item.quantity);
// // // // // // // // // // // //     });
// // // // // // // // // // // // });

// // // // // // // // // // // // nested function
// // // // // // // // // // // advancedOrders
// // // // // // // // // // //     .forEach(order => order.items
// // // // // // // // // // //         .forEach(item => {

// // // // // // // // // // //             console.log(item.productId);
// // // // // // // // // // //             console.log(item.quantity);
// // // // // // // // // // //         }))

// // // // // // // // // // // // প্রত্যেক order-এর product ID বের করা
// // // // // // // // // // // // const productIds = advancedOrders.map(order => {
// // // // // // // // // // // //     return order.items.map(item => {
// // // // // // // // // // // //         return item.productId;
// // // // // // // // // // // //     });
// // // // // // // // // // // // });

// // // // // // // // // // // // Outer map → একটি array
// // // // // // // // // // // // Inner map → আরেকটি array
// // // // // // // // // // // // Result → array-এর ভেতরে array

// // // // // // // // // // // console.log(productIds.join(", "));

// // // // // // // // // // // // map() এর কারণে nested array হচ্ছে: [[1, 3]]। এটাকে flat করতে flatMap() ব্যবহার
// // // // // // // // // // // const productIds = advancedOrders.flatMap(order =>
// // // // // // // // // // //     order.items.map(item => item.productId)
// // // // // // // // // // // );

// // // // // // // // // // // console.log(productIds); // [1, 3]

// // // // // // // // // // // // 1, 3 এভাবে দেখাতে
// // // // // // // // // // // console.log(productIds.join(", ")); // 1, 3

// // // // // // // // // // // // আলাদা লাইনে 1 এবং 3 দেখাতে:
// // // // // // // // // // // console.log(productIds.join("\n"));

// // // // // // // // // // const productsa = advancedOrders.flatMap(order => order.items.map(item => item.productId));

// // // // // // // // // // const productsb = advancedOrders.flatMap(
// // // // // // // // // //     order => order.items.map(item => item.productId)
// // // // // // // // // // );

// // // // // // // // // // const productsc = advancedOrders
// // // // // // // // // //     .flatMap(order => order.items.map(item => item.productId))
// // // // // // // // // //     .join(", ");

// // // // // // // // // // console.log(productsc); // '1, 3'

// // // // // // // // // // console.log(productsa);
// // // // // // // // // // console.log(productsb);
// // // // // // // // // // console.log(productsc);

// // // // // // // // // const users = [
// // // // // // // // //     { id: 101, name: "Rohan", active: true, blocked: false },
// // // // // // // // //     { id: 102, name: "Hasan", active: true, blocked: true },
// // // // // // // // //     { id: 103, name: "Karim", active: false, blocked: false }
// // // // // // // // // ];

// // // // // // // // // const products = [
// // // // // // // // //     { id: 1, name: "Premium Shirt", price: 1500, stock: 10 },
// // // // // // // // //     { id: 2, name: "Running Shoe", price: 3200, stock: 0 },
// // // // // // // // //     { id: 3, name: "Smart Watch", price: 5500, stock: 4 },
// // // // // // // // //     { id: 4, name: "Travel Bag", price: 2200, stock: 7 }
// // // // // // // // // ];

// // // // // // // // // const orders = [
// // // // // // // // //     {
// // // // // // // // //         id: 7001,
// // // // // // // // //         trackingCode: "ADV-1001",
// // // // // // // // //         userId: 101,
// // // // // // // // //         items: [
// // // // // // // // //             { productId: 1, quantity: 2 },
// // // // // // // // //             { productId: 3, quantity: 1 }
// // // // // // // // //         ],
// // // // // // // // //         paid: true
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //         id: 7002,
// // // // // // // // //         trackingCode: "ADV-1002",
// // // // // // // // //         userId: 102,
// // // // // // // // //         items: [
// // // // // // // // //             { productId: 2, quantity: 1 },
// // // // // // // // //             { productId: 4, quantity: 3 }
// // // // // // // // //         ],
// // // // // // // // //         paid: false
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //         id: 7003,
// // // // // // // // //         trackingCode: "ADV-1003",
// // // // // // // // //         userId: 103,
// // // // // // // // //         items: [
// // // // // // // // //             { productId: 1, quantity: 1 },
// // // // // // // // //             { productId: 4, quantity: 2 }
// // // // // // // // //         ],
// // // // // // // // //         paid: true
// // // // // // // // //     }
// // // // // // // // // ];

// // // // // // // // // const user = users.map(user => user.name);

// // // // // // // // // const activeUser = users.filter(user => user.active).map(user => user.name)

// // // // // // // // // const product3 = products.find(product => product.id === 3);

// // // // // // // // // const trackingCode = orders.filter(order => order).map(order => order.trackingCode);

// // // // // // // // // const productid = orders.map(order => order.items).flat().map(order => order.productId);

// // // // // // // // // const paid = orders.filter(order => order.paid).map(order => order.id);

// // // // // // // // // // যেই order-এর ভিতরে productId 4 আছে, সেই order গুলো বের করো
// // // // // // // // // const orderSome = orders.some(order =>
// // // // // // // // //     order.items.some(item => item.productId === 4)
// // // // // // // // // );

// // // // // // // // // console.log(orderSome); // true


// // // // // // // // // // some()
// // // // // // // // // // array-এর অন্তত একটা item শর্ত মানে কি?


// // // // // // // // // const ordersWithProduct4 = orders.filter(order =>
// // // // // // // // //     order.items.some(item => item.productId === 4)
// // // // // // // // // );

// // // // // // // // // console.log(user);
// // // // // // // // // console.log(activeUser);
// // // // // // // // // console.log(product3);
// // // // // // // // // console.log(trackingCode);
// // // // // // // // // console.log(productid);
// // // // // // // // // console.log(paid);
// // // // // // // // // console.log(ordersWithProduct4);


// // // // // // // // // const result = orders
// // // // // // // // //     .filter(order => order.items.some(item => item.productId === 4))
// // // // // // // // //     .flatMap(order => order.items)
// // // // // // // // //     .map(item => item.productId);

// // // // // // // // // console.log(result);

// // // // // // // // // const rest = orders.filter(order => order.items.some(order => order.productId === 4)).map(order => order.id).join(", ");

// // // // // // // // // console.log(rest);



// // // // // // // // // ############################################

// // // // // // // // // ################ Reduce ####################

// // // // // // // // //#############################################

// // // // // // // // //reduce() একটি array-এর সব item নিয়ে শেষে একটি final value তৈরি করে।

// // // // // // // // //...যেমন:

// // // // // // // // // সব সংখ্যার যোগফল
// // // // // // // // // সব product-এর total price
// // // // // // // // // মোট quantity
// // // // // // // // // মোট paid order amount
// // // // // // // // // একটি object-এর মধ্যে category-wise data তৈরি


// // // // // // // // const result = array.reduce((accumulator, currentItem) => {
// // // // // // // //     return updatedAccumulator;
// // // // // // // // }, initialValue);

// // // // // // // // // এখানে:

// // // // // // // // // accumulator বা acc = আগের হিসাব জমা রাখে
// // // // // // // // // currentItem = বর্তমানে যে item চলছে
// // // // // // // // // initialValue = হিসাব কোথা থেকে শুরু হবে


// // // // // // // // const numbers = [10, 20, 30];

// // // // // // // // const total = numbers.reduce((acc, number) => {
// // // // // // // //     return acc + number;
// // // // // // // // }, 0);

// // // // // // // // console.log(total);

// // // // // // // // const products = [
// // // // // // // //     { id: 1, name: "Shirt", price: 1500 },
// // // // // // // //     { id: 2, name: "Shoe", price: 3200 },
// // // // // // // //     { id: 3, name: "Watch", price: 5500 }
// // // // // // // // ];

// // // // // // // // const totalPrice = products.reduce((acc, product) => {
// // // // // // // //     return acc + product.price;
// // // // // // // // }, 0);

// // // // // // // // console.log(totalPrice);

// // // // // // // // const products = [
// // // // // // // //     { id: 1, name: "Shirt", price: 1500, stock: 10 },
// // // // // // // //     { id: 2, name: "Shoe", price: 3200, stock: 0 },
// // // // // // // //     { id: 3, name: "Watch", price: 5500, stock: 4 },
// // // // // // // //     { id: 4, name: "Bag", price: 2200, stock: 7 }
// // // // // // // // ];

// // // // // // // // const totalStock = products.reduce((acc, product) => {
// // // // // // // //     return acc + product.stock;
// // // // // // // // }, 0);

// // // // // // // // console.log(totalStock);


// // // // // // // // products.reduce((total, currentProduct) => {
// // // // // // // //     return total + currentProduct.price;
// // // // // // // // }, 0);

// // // // // // // // const numbers = [10, 20, 30, 40];

// // // // // // // // const result = numbers.reduce((a, b) => {
// // // // // // // //     return a + b;
// // // // // // // // }, 0);

// // // // // // // // console.log(result)

// // // // // // // // const prices = [100, 250, 300, 150];

// // // // // // // // const result = prices.reduce((total, number) => total + number, 0);


// // // // // // // // console.log(result);


// // // // // // // const products = [
// // // // // // //     { name: "Shirt", price: 1200 },
// // // // // // //     { name: "Shoe", price: 2500 },
// // // // // // //     { name: "Cap", price: 800 }
// // // // // // // ];

// // // // // // // const result = products.reduce((total, number) => total + number.price, 0);

// // // // // // // products.map(product => product.map);

// // // // // // // console.log(result);

// // // // // // // //regular
// // // // // // // function addPrice(total, product) {
// // // // // // //     return total + product.price;
// // // // // // // }
// // // // // // // const result = products.reduce(addPrice, 0);

// // // // // // // // normal
// // // // // // // const result = products.reduce(function (total, product) {
// // // // // // //     return total + product.price;
// // // // // // // }, 0);

// // // // // // // // short
// // // // // // // const result = products.reduce((total, product) => {
// // // // // // //     return total + product.price;
// // // // // // // }, 0);

// // // // // // // //shortest
// // // // // // // const result = products.reduce((total, product) => total + product.price, 0); 

// // // // // // const orders = [
// // // // // //     { id: 1, price: 1200, quantity: 2, paid: true },
// // // // // //     { id: 2, price: 2500, quantity: 1, paid: false },
// // // // // //     { id: 3, price: 800, quantity: 3, paid: true },
// // // // // //     { id: 4, price: 1500, quantity: 2, paid: true }
// // // // // // ];

// // // // // // // শুধু paid: true orderগুলোর মোট amount বের করো। প্রতিটি order-এর amount হবে:

// // // // // // const result = orders.filter(order => order.paid).reduce((total, order) => total + order.price * order.quantity, 0);

// // // // // // console.log(result);

// // // // // // const orders = [
// // // // // //     { id: 1, amount: 1200, paid: true },
// // // // // //     { id: 2, amount: 2500, paid: false },
// // // // // //     { id: 3, amount: 800, paid: true }
// // // // // // ];

// // // // // // const result = orders.reduce((total, order) => {
// // // // // //     if (order.paid) {
// // // // // //         return total + order.amount;
// // // // // //     }

// // // // // //     return total;
// // // // // // }, 0);

// // // // // // console.log(result); // 2000

// // // // // const products = [
// // // // //     { name: "Shirt", price: 1200, stock: 5 },
// // // // //     { name: "Shoe", price: 2500, stock: 0 },
// // // // //     { name: "Cap", price: 800, stock: 8 },
// // // // //     { name: "Watch", price: 3500, stock: 0 }
// // // // // ];

// // // // // // শুধু যেসব product - এর stock > 0, সেগুলোর মোট price বের করো। শুধু reduce() ব্যবহার, filter() নয়।

// // // // // const result = products.reduce((total, product) => {
// // // // //     if (product.stock > 0) {
// // // // //         return total + product.price
// // // // //     } else {
// // // // //         return total
// // // // //     }
// // // // // }, 0);

// // // // // // shortest
// // // // // const result = products.reduce((total, product) => product.stock > 0 ? total + product.price : total, 0);

// // // // // // clean 
// // // // // const result = products.reduce((total, product) => total + (product.stock > 0 ? product.price : 0), 0);


// // // // // console.log(result);

// // // // //reduce() দিয়ে count বের করো: কতজন user active: true, সেটা বের করো।
// // // // // const users = [
// // // // //     { name: "Rohan", active: true },
// // // // //     { name: "Hasan", active: false },
// // // // //     { name: "Karim", active: true },
// // // // //     { name: "Nayeem", active: true }
// // // // // ];

// // // // // const result = users.reduce((total, user) => user.active ? total + 1 : total, 0);

// // // // // //clean 
// // // // // const result = users.reduce(
// // // // //     (activeCount, user) => activeCount + (user.active ? 1 : 0),
// // // // //     0
// // // // // );


// // // // const products = [
// // // //     { name: "Shirt", price: 1200 },
// // // //     { name: "Shoe", price: 2500 },
// // // //     { name: "Cap", price: 800 },
// // // //     { name: "Watch", price: 3500 }
// // // // ];

// // // // const result = products.reduce((total, product) => {
// // // //     if (product.price > total) {
// // // //         return total
// // // //     }

// // // //     return total + product.price
// // // // }, 0);


// // // // const result = products.reduce((highestPrice, product) => {
// // // //     if (product.price > highestPrice) {
// // // //         return product.price;
// // // //     }

// // // //     return highestPrice;
// // // // }, 0);

// // // // const result = products.reduce(
// // // //     (highestPrice, product) =>
// // // //         product.price > highestPrice ? product.price : highestPrice,
// // // //     0
// // // // );

// // // // console.log(result);

// // // // console.log(result);



// // // const orders = [
// // //     {
// // //         id: 1,
// // //         price: 1200,
// // //         quantity: 2,
// // //         discount: 10,
// // //         paid: true,
// // //         cancelled: false
// // //     },
// // //     {
// // //         id: 2,
// // //         price: 2500,
// // //         quantity: 1,
// // //         discount: 20,
// // //         paid: false,
// // //         cancelled: false
// // //     },
// // //     {
// // //         id: 3,
// // //         price: 800,
// // //         quantity: 3,
// // //         discount: 0,
// // //         paid: true,
// // //         cancelled: false
// // //     },
// // //     {
// // //         id: 4,
// // //         price: 1500,
// // //         quantity: 2,
// // //         discount: 10,
// // //         paid: true,
// // //         cancelled: true
// // //     }
// // // ];


// // // // শুধু যেসব order:

// // // // paid === true
// // // // cancelled === false

// // // // সেগুলোর মোট revenue বের করো।

// // // //without discount
// // // const result = orders.reduce((totalRevenue, order) => order.paid && !order.cancelled ? (totalRevenue + order.price * order.quantity) : totalRevenue, 0);

// // // //with discount
// // // const results = orders.reduce((totalRevenue, order) => order.paid && !order.cancelled ? totalRevenue + order.price * order.quantity * (1 - order.discount / 100) : totalRevenue, 0);

// // // console.log(result);
// // // console.log(results);


// const orders = [
//     {
//         id: 1,
//         price: 1200,
//         quantity: 2,
//         discount: 10,
//         deliveryFee: 100,
//         paid: true,
//         cancelled: false
//     },
//     {
//         id: 2,
//         price: 2500,
//         quantity: 1,
//         discount: 20,
//         deliveryFee: 0,
//         paid: true,
//         cancelled: false
//     },
//     {
//         id: 3,
//         price: 3000,
//         quantity: 2,
//         discount: 5,
//         deliveryFee: 150,
//         paid: false,
//         cancelled: false
//     },
//     {
//         id: 4,
//         price: 2000,
//         quantity: 3,
//         discount: 0,
//         deliveryFee: 100,
//         paid: true,
//         cancelled: true
//     },
//     {
//         id: 5,
//         price: 1800,
//         quantity: 3,
//         discount: 15,
//         deliveryFee: 120,
//         paid: true,
//         cancelled: false
//     }
// ];

// // const subtotal = orders.map(order => order.price * order.quantity);

// // const discount = orders.map(order => subtotal * order.discount / 100);

// // const finalAmount = orders.map(order => subtotal - discount + order.deliveryFee);

// // const result = orders.reduce((total, order) => order.paid && !order.cancelled ? total > order.price * order.quantity * order.discount / 100 + order.deliveryFee : total, 0);



// // console.log(result);

// const subtotal = orders.map(
//     order => order.price * order.quantity
// );

// const discount = orders.map(
//     (order, index) =>
//         subtotal[index] * order.discount / 100
// );

// const finalAmount = orders.map(
//     (order, index) =>
//         subtotal[index] - discount[index] + order.deliveryFee
// );

// const result = orders.reduce((highestAmount, order, index) => {
//     if (order.paid && !order.cancelled) {
//         return finalAmount[index] > highestAmount
//             ? finalAmount[index]
//             : highestAmount;
//     }

//     return highestAmount;
// }, 0);

// console.log(result); 

const project = [
    {
        id: 1,
        name: "Project A",
        task: "Design"
    },
    {
        id: 2,
        name: "Project B",
        task: "Development"
    },
    {
        id: 3,
        name: "Project C",
        task: "array"
    },
    {
        id: 4,
        name: "Project D",
        task: "core"
    },
]

const tasks = project.map(project => project.task);

const name = project.map(project => project.name);

const nameandTask = project.map(project => project.name + " - " + project.task);

const result = project.map(project => {
    return {
        id: project.id,
        name: project.name,
        task: project.task
    };
});

const finalAmount = orders.map(
    (order, index) =>
        subtotal[index] - discount[index] + order.deliveryFee
);

const result = orders.reduce((highestAmount, order, index) => {
    if (order.paid && !order.cancelled) {
        return finalAmount[index] > highestAmount
            ? finalAmount[index]
            : highestAmount;
    }

    return highestAmount; s

}, 0);

console.log(result); 