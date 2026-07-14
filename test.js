const users = [
    { id: 101, name: "Rohan", city: "Dhaka", active: true, blocked: false },
    { id: 102, name: "Hasan", city: "Sylhet", active: true, blocked: true },
    { id: 103, name: "Karim", city: "Dhaka", active: false, blocked: false },
    { id: 104, name: "Nayeem", city: "Chittagong", active: true, blocked: false }
];

const products = [
    { id: 1, name: "T-Shirt", price: 500, stock: 20, category: "clothing" },
    { id: 2, name: "Shoe", price: 2500, stock: 0, category: "footwear" },
    { id: 3, name: "Watch", price: 1800, stock: 5, category: "accessory" },
    { id: 4, name: "Bag", price: 1200, stock: 10, category: "accessory" },
    { id: 5, name: "Pant", price: 900, stock: 0, category: "clothing" }
];

const orders = [
    {
        id: 9001,
        trackingCode: "ORD-1001",
        userId: 101,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 3, quantity: 1 }
        ],
        paid: true
    },
    {
        id: 9002,
        trackingCode: "ORD-1002",
        userId: 102,
        items: [
            { productId: 2, quantity: 1 },
            { productId: 4, quantity: 2 }
        ],
        paid: false
    },
    {
        id: 9003,
        trackingCode: "ORD-1003",
        userId: 104,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 5, quantity: 3 }
        ],
        paid: true
    }
];

const trackingcd = orders.map(order => order.trackingCode);

const productid = orders.map(order => order.items).flat().map(order => order.productId);

const productid1 = orders.filter(order => order.items.some(item => item.productId === 1)).map(order => order.id);

console.log(trackingcd);
console.log(productid);
console.log(productid1);