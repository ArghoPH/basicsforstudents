// // ************ Destructuring ***************
// // Destructuring = object থেকে value বের করে সরাসরি variable-এ রাখা

// const product = { name: "Shirt", price: 1200, stock: 12 };

// // পুরনো উপায় (তুমি এটা পারো)
// // const name = product.name;
// // const price = product.price;

// // নতুন উপায়: এক লাইনে
// const { name, price } = product;

// console.log(name);   // Shirt
// console.log(price);  // 1200

const products = [
  { name: "Shirt", price: 1200, stock: 12 },
  { name: "Shoe", price: 2500, stock: 0 },
  { name: "Cap", price: 800, stock: 20 }
];

const result = products.map(product => product.name)

console.log(result);

// normal
const names1 = products.map(function (product) {
  return product.name;
});

// arrow + destructuring
const name2 = products.map( ({name}) => {
    return name;
});

// shortest
const names = products.map(({ name }) => name);

console.log(names); // ['Shirt', 'Shoe', 'Cap']

// দুইটা value একসাথে
const labels = products.map(({ name, price }) => `${name} - ৳${price}`);
console.log(labels); // ['Shirt - ৳1200', 'Shoe - ৳2500', 'Cap - ৳800']