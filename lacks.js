// Function Call

const foods = [
  { id: 1, name: "Burger", price: 250 },
  { id: 2, name: "Pizza", price: 800 },
  { id: 3, name: "Coke", price: 50 }
];

const order1 = {
  id: "F-01",
  items: [
    { foodId: 1, qty: 2, cancelled: false },
    { foodId: 3, qty: 3, cancelled: false },
    { foodId: 2, qty: 1, cancelled: true }
  ]
};

function double(number) {
  return number * 2;
};

console.log(double(2));