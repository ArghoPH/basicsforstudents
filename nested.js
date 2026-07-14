const orders = [
    {
        id: 7001,
        trackingCode: "ADV-1001",
        userId: 101,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 3, quantity: 1 }
        ],
        paid: true
    },
    {
        id: 7002,
        trackingCode: "ADV-1002",
        userId: 102,
        items: [
            { productId: 654641, quantity: 1 },
            { productId: 323321, quantity: 2 }
        ],
        paid: false
    },
]

console.log(orders);
console.dir(orders, { depth: null });

console.log(Array.isArray(orders));
console.log(Object.keys(orders[0] ?? {}));