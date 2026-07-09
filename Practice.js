// Problem 1: Admission Eligibility

// একজন ছাত্রকে ভর্তি হতে হলে —

// তার বয়স 18 বা তার বেশি হতে হবে এবং

// তার GPA 3.0 বা তার বেশি হতে হবে।

// 👉 Check করো ছাত্র ভর্তি হতে পারবে কি না।



var age = 19;
var CGPA = 4.00;

if (age >= 18 && CGPA >= 3.00) {
    console.log('Eligible')
}
else {
    console.log('Not Eligible')
}



// **Problem 2: Discount Offer

// একটা দোকানে ডিসকাউন্ট পাওয়া যাবে যদি —

// কাস্টমার VIP হয় অথবা

// কাস্টমার 5000 টাকা বা তার বেশি কেনাকাটা করে।

// 👉 শর্ত মেনে ডিসকাউন্ট পাবে কি না সেটা বের করো।


const Customer = "VIP";
const Shopping = 10000;
const isVIP = true;

if (Shopping >= 5000 || isVIP == true) {
    const discount = Shopping * 10 / 100;
    console.log(Shopping)
    console.log(discount)
    console.log(Shopping - discount);
}

else {
    console.log(Shopping);
}

// Problem 3: Driving License

// একজন মানুষ ড্রাইভিং লাইসেন্স পাবে যদি —

// বয়স 18 বা তার বেশি হয় এবং

// তার written test এবং driving test দুটোই পাস করে।

// 👉 লিখে দেখো সে লাইসেন্স পাবে কি না।


let isWritten = true;
let isDriving = false;


if (age >= 18 && isWritten == true && isDriving == true) {
    console.log('passed for the license')
}

else {
    console.log('Try Again next Time')
}

// Problem 4: Movie Ticket

// কোনো সিনেমার টিকেট ফ্রি দেওয়া হবে যদি —

// বয়স 12 এর কম হয় অথবা বয়স 60 এর বেশি হয়।

// 👉 ইনপুট হিসেবে বয়স নিয়ে বলো ফ্রি পাবে কি না।

var age = 12;

if (age <= 12 || age >= 60) {
    console.log('Free Movie')
}
else {
    console.log('get Ticket')
}



// লগইন হবে যদি —

// username সঠিক হয় এবং password সঠিক হয়।
// 👉 টেস্ট করার জন্য username = "admin", password = "1234" ধরে কোড লিখো।


var username = 'admin';
var password = '1234';

if (username == 'admin' && password == '1234') {
    console.log('login')
}

else {
    console.log('wrong username or password')
}

// Problem 1: Job Application

// একজন প্রার্থীকে চাকরির জন্য সিলেক্ট করা হবে যদি—

// তার বয়স 21 থেকে 35 এর মধ্যে হয় এবং

// তার ডিগ্রি "Bachelor" বা "Master" হয় এবং

// তার অভিজ্ঞতা 2 বছরের বেশি হয়।

// 👉 কনসোল-এ দেখাও: "Selected" বা "Not Selected"।


var age = 20;
const isDegree = true;
let experiences = 2;

if (age >= 21 && age <= 35) {
    console.log('age passed')
}
else {
    console.log('Age too young or too old for the post')
}

if (isDegree == true) {
    console.log('has degree')
}

else {
    console.log('No degree')
}

if (experiences >= 2) {
    console.log('Has Experiences')
}

else {
    console.log('no experiences')
}

if (age >= 21 && age <= 35 && isDegree == true && experiences >= 2) {
    console.log('Selected')
}

else {
    console.log('Not Selected')
}


// Problem 2: Online Exam System
// একজন ছাত্র পরীক্ষায় পাশ করবে যদি—
// •	তার Written Score ≥ 40 এবং
// •	(Viva ≥ 20 অথবা Project ≥ 25)।
// 👉 Output: "Pass" বা "Fail"।

var written = 40;
var viva = 20;
var project = 24;

// Explicit parentheses for clarity
if ((written >= 40 && viva >= 20) || (project >= 25)) {
    console.log('Pass')
}
else {
    console.log('Fail')
}


// Problem 3: Bank Loan Approval
// ব্যাংক লোন দেওয়া হবে যদি—
// •	কাস্টমারের বয়স 25–60 এর মধ্যে হয় এবং
// •	মাসিক আয় ≥ 30000 হয় এবং
// •	(কাস্টমারের চাকরি স্থায়ী হয় অথবা তার জমি/প্রপার্টি থাকে)।
// 👉 Output: "Loan Approved" বা "Loan Denied"।

var age = 45;
var income = 60000;
var isPermanentJob = true;
var hasProperty = false;

if ((age >= 25 && age <= 60) && (income >= 30000) && (isPermanentJob || hasProperty)) {
    console.log('Loan Approved')
}

else {
    console.log('Loan Denied')
}

// Problem 4: E-commerce Delivery Charge
// Delivery charge হবে—
// •	যদি কাস্টমার VIP হয় অথবা তার শপিং ≥ 5000 হয় → Free Delivery।
// •	অন্যথায়—
// o	যদি শপিং 2000–4999 এর মধ্যে হয় → Delivery charge = 50।
// o	যদি শপিং 2000 এর কম হয় → Delivery charge = 100।
// 👉 Output: কত টাকা Delivery Charge দিতে হবে।


var is_VIP = false;
var shop = 1999;

if ((is_VIP || shop >= 5000)) {
    console.log('Free Delivery')
}

else if (shop >= 2000 && shop <= 4999) {
    console.log('Delivery Charge 50 Taka')
}

else if (shop <= 2000) {
    console.log('Delivery Charge 100 Taka Only')
}

else {
    console.log('Invalid')
}


// Problem 5: Scholarship Eligibility
// একজন ছাত্র Scholarship পাবে যদি—
// •	GPA ≥ 3.8 এবং বয়স ≤ 22 অথবা
// •	GPA ≥ 3.5 এবং সে কোনো খেলাধুলায় National Level Winner হয়।
// 👉 Output: "Scholarship Granted" বা "Not Eligible"।


var student = 3.8;
var age = 21;
var isNationalLvlW = true;

if (student >= 3.8 && age >= 22) {
    console.log('Scholarship Granted')
}

else if (student >= 3.5 && isNationalLvlW) {
    console.log('Scholarship Granted')
}

else {
    console.log('Not Eligible')
}

// একজন কর্মীর basic salary আর years of experience দেওয়া থাকবে।
// 👉 Rule:

// যদি experience ≥ 10 → basic salary এর সাথে 20% bonus

// যদি experience 5–9 → 10% bonus

// যদি experience 2–4 → 5% bonus

// 2 বছরের কম → No bonus

// এরপর টোটাল salary > 50000 হলে → "High Salary" না হলে → "Normal Salary"

let salary = 55000;
var experience = 10;
let bonous = 0;

if (experience >= 10) {
    bonous = salary * 20 / 100
}

else if (experience >= 5 && experience <= 9) {
    bonous = salary * 10 / 100
}

else if (experience >= 2 && experience <= 4) {
    bonous = salary * 5 / 100
}


else {
    bonous = "No Bonous"
}

let totalSalary = salary + bonous;



if (totalSalary > 50000) {
    console.log("High Salary")
}

else {
    console.log('Normal Salary')
}


// 👉 Rule:

// প্রথম 100 unit → 5 টাকা/unit

// পরের 100 unit (101–200) → 8 টাকা/unit

// 200 এর উপরে → 10 টাকা/unit

// সবশেষে, যদি total bill > 2000 হয় → 5% surcharge যোগ হবে।


let unit = 250;
let totalBill = 0;

if (unit <= 100) {
    totalBill = unit * 5;
}
else if (unit <= 200) {
    totalBill = (100 * 5) + ((unit - 100) * 8);
}
else {
    totalBill = (100 * 5) + (100 * 8) + ((unit - 200) * 10);
}

// surcharge যোগ হবে যদি 2000 এর বেশি হয়
if (totalBill > 2000) {
    totalBill = totalBill + (totalBill * 5 / 100);
}

console.log("Total Bill:", totalBill);


// প্রথম 50 unit → 7 টাকা/unit

// পরের 100 unit (51–150) → 10 টাকা/unit

// 150 এর উপরে → 15 টাকা/unit

// যদি মোট বিল 3000 এর বেশি হয় তাহলে 10% surcharge যোগ হবে।

let uunit = 60;
let TotalTaka = 0;

if (uunit <= 50) {
    TotalTaka = uunit * 7;
}
else if (uunit > 50 && uunit <= 150) {
    TotalTaka = (uunit * 10) - TotalTaka;
}

else if (uunit > 150) {
    TotalTaka = (uunit * 15) - TotalTaka;
}

console.log(`Total Bill is ${TotalTaka}`);
// surcharge যোগ হবে যদি 3000 এর বেশি হয়
if (TotalTaka > 3000) {
    TotalTaka = TotalTaka + (TotalTaka * 10 / 100);
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// #########   MAP Filter & ForEach ####################
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const products = [
    { id: 1, name: "Shirt", price: 1200, discount: 200, category: "clothing", stock: 12 },
    { id: 2, name: "Shoe", price: 2500, discount: 500, category: "footwear", stock: 0 },
    { id: 3, name: "Cap", price: 800, discount: 100, category: "accessory", stock: 20 },
    { id: 4, name: "Pant", price: 1800, discount: 300, category: "clothing", stock: 5 },
    { id: 5, name: "Watch", price: 3500, discount: 700, category: "accessory", stock: 0 }
];

// All products price

const product = products.map(product => product.price - product.discount);

const result = products.slice(0, 2).map(product => ({ name: product.name, finalPrice: product.price - product.discount }))

const stock = products.filter(product => {
    if (product.stock > 0) {
        return product.name;
    }
})

console.log(product);
console.log(result);
console.log(stock);