// let price = 500;
// const productName = "Shirt";

// price = 700;

// console.log(price);
// console.log(productName);

// function showProduct() {
//     const ProductNames = "Shirt";
//     let oprice = 700;

//     console.log(ProductNames);
//     console.log(oprice);
// }
//calling function

// dynamic
// function showProduct(ProductName, Price) {
//     console.log(ProductName);
//     console.log(Price);
// }

// showProduct("Shirt", 700);


// function showProduct(productName, price) {
//     console.log(productName);
//     console.log(price);
// }

// showProduct("Pant", 1200);


// function calculateTotal(price, deliveryCharge) {
//     return price + deliveryCharge;
// }

// const result = calculateTotal(1200, 100);
// console.log(result);

// const product = {
//     name: "Shoe",
//     price: 2500,
//     discount: 500
// }

// const total = product.price - product.discount

// console.log(product.name)
// console.log(total);


// const products = ["Bag", "Watch", "Cap"]

// console.log(products[0]);
// console.log(products[1]);
// console.log(products[2]);


// const products = [
//     { name: "Bag", price: 1200 },
//     { name: "Watch", price: 3500 },
//     { name: "Cap", price: 800 }
// ]

// console.log(products[0].name);
// console.log(products[1].price);
// console.log(products[2].name);

// const product = {
//     name: "Watch",
//     price: 3500,
//     discount: 500,
//     deliveryCharge: 100,
// }

// function receive() {
//     const total = product.price - product.discount + product.deliveryCharge;
//     return total;
// }

// const total = receive();

// console.log(product.name);
// console.log(total);

// const products = [
//     { name: "Shirt", price: 1200 },
//     { name: "Shoe", price: 2500 }
// ]

// function getHigherPriceProduct(product1, product2) {
//     if (product1.price > product2.price) {
//         return product1.name;
//     } else {
//         return product2.name;
//     }
// }

// const result = getHigherPriceProduct(products[0], products[1]);

// console.log(result)

// const order =
// {
//     customerName: "Rohan",
//     Item1Price: 1200,
//     Item2Price: 1500,
//     Item3Price: 800,
//     discount: 300
// };


// function createOrderSummery(oderInfo) {
//     const totalBeforeDiscount = oderInfo.Item1Price + oderInfo.Item2Price + oderInfo.Item3Price;
//     const finalTotal = totalBeforeDiscount - oderInfo.discount

//     const summery = {
//         customerName: oderInfo.customerName,
//         totalBeforeDiscount: totalBeforeDiscount,
//         finalTotal: finalTotal
//     }

//     return summery;
// }

// const result = createOrderSummery(order);

// console.log(result);


// const userInfo = {
//     Email: "rohan@gmail.com",
//     Password: 123456,
//     inputmail: 'rohan@gmail.com',
//     inputPass: 123456
// }

// function login(user, inputMail, inputPass) {
//     if (user.Email === inputMail && user.Password === inputPass) {
//         return "Login Successfull"
//     } else {
//         return "Login Fail"
//     }
// }

// const user = login(userInfo, "rohan@gmail.com", 123456);

// console.log(user);

// const Product = {
//     Name: "Shoe",
//     Price: 2500,
//     Discount: 500,
//     DeliveryCharge: 100
// };

// function receiveObject(productInfo) {
//     const finalPrice = productInfo.Price - productInfo.Discount + productInfo.DeliveryCharge;
//     return finalPrice;
// }

// const result = receiveObject(Product);

// console.log(Product.Name)
// console.log(result);

// const product = [
//     { name: "Shirt", Price: 1200 },
//     { name: "Shoe", Price: 2500 },
// ]

// function receiveProducts(product1, product2) {
//     if (product1.Price > product2.Price) {
//         return product1.name
//     } else {
//         return product2.name
//     }
// }

// const result = receiveProducts(product[0], product[1])

// console.log(result);



// const orderInfo = {
//     customerName: "Rohan",
//     item1Price: 1200,
//     item2Price: 1500,
//     item3Price: 800,
//     discount: 300
// };

// function orderSummary(order) {
//     const totalPriceBeforeDiscount = order.item1Price + order.item2Price + order.item3Price;

//     const afterDiscount = totalPriceBeforeDiscount - order.discount;

//     const summary = {
//         customerNamename: order.customerName,
//         totalPriceBeforeDiscount: totalPriceBeforeDiscount,
//         afterDiscount: afterDiscount,
//     }

//     return summary;
// }

// const summary = orderSummary(orderInfo);

// console.log(summary.customerNamename);
// console.log(summary.totalPriceBeforeDiscount);
// console.log(summary.afterDiscount);


// const userinfo = {
//     email: "rohan@gmail.com",
//     pass: "123456"
// }

// function login(user, inputMail, inputPass) {
//     if (user.email === inputMail && user.pass === inputPass) {
//         return "Login successful";
//     } else {
//         return "Invalid email or password";
//     }
// }

// const result = login(userinfo, "rohan@gmail.com", "123456")

// console.log(result);


// Phase 2

//  basic idea

// ধরো তোমার কাছে একটা products array আছে:

// const products = [
//   { id: 1, name: "Shirt", price: 1200, category: "clothing", inStock: true },
//   { id: 2, name: "Shoe", price: 2500, category: "footwear", inStock: false },
//   { id: 3, name: "Cap", price: 800, category: "accessory", inStock: true },
//   { id: 4, name: "Pant", price: 1800, category: "clothing", inStock: true }
// ];

// এখন তুমি চাইতে পারো:

// সব product-এর name দেখাতে
// শুধু 1500 টাকার নিচের product বের করতে
// শুধু first matching product বের করতে
// price থেকে discount calculate করতে
// stock আছে এমন product দেখাতে

// এই কাজগুলোতেই map, filter, find লাগে।