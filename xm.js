const users = [
    { id: 1, name: "  rohan AHMED ", city: "Dhaka", active: true, blocked: false },
    { id: 2, name: "nadia islam", city: "Sylhet", active: true, blocked: false },
    { id: 3, name: "KARIM hasan  ", city: "Dhaka", active: false, blocked: false },
    { id: 4, name: " mitu rahman", city: "Khulna", active: true, blocked: true },
    { id: 5, name: "sakib KHAN", city: "Sylhet", active: true, blocked: false }
];

const products = [
    { id: 101, name: "Cotton Shirt", category: "clothing", price: 1200, stock: 15 },
    { id: 102, name: "Denim Pant", category: "clothing", price: 1800, stock: 0 },
    { id: 103, name: "Running Shoe", category: "footwear", price: 3500, stock: 8 },
    { id: 104, name: "Leather Wallet", category: "accessory", price: 900, stock: 20 },
    { id: 105, name: "Smart Watch", category: "accessory", price: 5000, stock: 3 },
    { id: 106, name: "Sandal", category: "footwear", price: 1500, stock: 12 }
];

const coupons = [
    { code: "SAVE10", type: "percent", value: 10, minOrder: 3000, active: true },
    { code: "FLAT500", type: "flat", value: 500, minOrder: 5000, active: true },
    { code: "OLD20", type: "percent", value: 20, minOrder: 0, active: false }
];

const deliveryFees = { Dhaka: 60, Sylhet: 120, Khulna: 120 };

const orders = [
    {
        id: "ORD-001", userId: 1, date: "2026-09-02T10:30:00", status: "delivered", coupon: " save10 ",
        items:
            [
                { productId: 101, qty: 2, returned: false },
                { productId: 104, qty: 1, returned: false }
            ]
    },
    {
        id: "ORD-002", userId: 2, date: "2026-09-05T14:00:00", status: "delivered", coupon: "FLAT500",
        items: [
            { productId: 105, qty: 1, returned: false },
            { productId: 106, qty: 1, returned: false }
        ]
    },
    {
        id: "ORD-003", userId: 1, date: "2026-09-08T09:15:00", status: "cancelled", coupon: null,
        items: [
            { productId: 103, qty: 1, returned: false }
        ]
    },
    {
        id: "ORD-004", userId: 5, date: "2026-09-10T18:45:00", status: "delivered", coupon: "old20",
        items: [
            { productId: 103, qty: 1, returned: false },
            { productId: 101, qty: 1, returned: true }
        ]
    },
    {
        id: "ORD-005", userId: 3, date: "2026-09-12T11:00:00", status: "delivered", coupon: null,
        items: [
            { productId: 104, qty: 2, returned: false }]
    },
    {
        id: "ORD-006", userId: 4, date: "2026-09-15T16:20:00", status: "delivered", coupon: "SAVE10",
        items: [
            { productId: 105, qty: 1, returned: false }]
    },
    {
        id: "ORD-007", userId: 2, date: "2026-09-18T20:10:00", status: "delivered", coupon: "SAVE10 ",
        items: [
            { productId: 106, qty: 2, returned: false }]
    },
    {
        id: "ORD-008", userId: 5, date: "2026-08-28T12:00:00", status: "delivered", coupon: null,
        items: [
            { productId: 101, qty: 3, returned: false }]
    },
    {
        id: "ORD-009", userId: 1, date: "2026-09-22T08:30:00", status: "pending", coupon: null,
        items: [
            { productId: 105, qty: 1, returned: false }]
    },
    {
        id: "ORD-010", userId: 5, date: "2026-09-25T13:40:00", status: "delivered", coupon: "flat500",
        items: [
            { productId: 106, qty: 1, returned: true },
            { productId: 104, qty: 1, returned: true }]
    },
    {
        id: "ORD-011", userId: 2, date: "2026-09-28T17:05:00", status: "delivered", coupon: null,
        items: [
            { productId: 103, qty: 2, returned: false },
            { productId: 104, qty: 1, returned: false }]
    },
    {
        id: "ORD-012", userId: 1, date: "2026-09-30T23:30:00", status: "delivered", coupon: "FLAT500",
        items: [
            { productId: 101, qty: 1, returned: false },
            { productId: 106, qty: 2, returned: false }]
    },
    {
        id: "ORD-013", userId: 5, date: "2026-10-01T00:15:00", status: "delivered", coupon: null,
        items: [
            { productId: 104, qty: 1, returned: false }]
    }
];

function generateCustomerReport(users, products, coupons, deliveryFees, orders) {

    return users.map(user => {

        // 1. Find all orders for this customer
        const userOrders = orders.filter(
            order => order.userId === user.id
        );

        // 2. Initialize the report
        const report = {
            userId: user.id,

            name: user.name
                .trim()
                .toLowerCase()
                .replace(/\b\w/g, char => char.toUpperCase()),

            totalOrders: userOrders.length,
            deliveredOrders: 0,
            cancelledOrders: 0,

            totalItemsPurchased: 0,
            totalReturnedItems: 0,

            totalSubtotal: 0,
            totalDiscount: 0,
            totalDeliveryFee: 0,
            totalSpent: 0,

            mostPurchasedProduct: null,
            categorySummary: {},
            orders: []
        };

        // 3. Store quantity for each product
        const productQuantities = { };

        // 4. Process each order
        userOrders.forEach(order => {

            if (order.status === "delivered") {
                report.deliveredOrders++;
            }

            if (order.status === "cancelled") {
                report.cancelledOrders++;
            }

            // 5. Calculate the order subtotal
            const subtotal = order.items.reduce((total, item) => {

                const product = products.find(
                    product => product.id === item.productId
                );

                if (!product) {
                    return total;
                }

                // Exclude returned items from subtotal
                if (item.returned) {
                    if (order.status === "delivered") {
                        report.totalReturnedItems += item.qty;
                    }

                    return total;
                }

                return total + product.price * item.qty;

            }, 0);

            let discount = 0;
            let deliveryFee = 0;

            // 6. Only delivered orders count toward spending
            if (order.status === "delivered") {

                report.totalSubtotal += subtotal;

                // 7. Normalize the coupon code
                const couponCode = order.coupon
                    ? order.coupon.trim().toUpperCase()
                    : null;

                // 8. Find an active coupon
                const coupon = coupons.find(coupon =>
                    coupon.code.toUpperCase() === couponCode &&
                    coupon.active
                );

                // 9. Calculate discount
                if (coupon && subtotal >= coupon.minOrder) {

                    if (coupon.type === "percent") {
                        discount =
                            subtotal * coupon.value / 100;
                    }

                    if (coupon.type === "flat") {
                        discount = Math.min(
                            coupon.value,
                            subtotal
                        );
                    }
                }

                report.totalDiscount += discount;

                // 10. Calculate delivery fee
                deliveryFee = deliveryFees[user.city] ?? 0;

                report.totalDeliveryFee += deliveryFee;

                // 11. Calculate purchased products and categories
                order.items.forEach(item => {

                    const product = products.find(
                        product => product.id === item.productId
                    );

                    if (!product || item.returned) {
                        return;
                    }

                    // Total purchased quantity
                    report.totalItemsPurchased += item.qty;

                    // Product-wise quantity
                    if (!productQuantities[product.id]) {
                        productQuantities[product.id] = {
                            productId: product.id,
                            name: product.name,
                            quantity: 0
                        };
                    }

                    productQuantities[product.id].quantity +=
                        item.qty;

                    // Initialize category if it does not exist
                    if (!report.categorySummary[product.category]) {
                        report.categorySummary[product.category] = {
                            quantity: 0,
                            amount: 0
                        };
                    }

                    // Update category quantity and amount
                    report.categorySummary[product.category].quantity +=
                        item.qty;

                    report.categorySummary[product.category].amount +=
                        product.price * item.qty;
                });
            }

            // 12. Save order-level information
            report.orders.push({
                orderId: order.id,
                status: order.status,
                subtotal: subtotal,
                discount: discount,
                deliveryFee: deliveryFee,

                total: order.status === "delivered"
                    ? subtotal - discount + deliveryFee
                    : 0
            });
        });

        // 13. Calculate total spending
        report.totalSpent =
            report.totalSubtotal -
            report.totalDiscount +
            report.totalDeliveryFee;

        // 14. Find the most purchased product
        report.mostPurchasedProduct =
            Object.values(productQuantities).reduce(
                (mostPurchased, product) => {

                    if (
                        !mostPurchased ||
                        product.quantity > mostPurchased.quantity
                    ) {
                        return product;
                    }

                    return mostPurchased;

                },
                null
            );

        // 15. Return this customer's complete report
        return report;
    });
}

// 16. Generate and display the complete report
const customerReport = generateCustomerReport(
    users,
    products,
    coupons,
    deliveryFees,
    orders
);

console.log(JSON.stringify(customerReport, null, 2));