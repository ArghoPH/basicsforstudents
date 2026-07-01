var Abstract = "Abstract" ;
var boolean = "Boolean";
var breakp = "break";
var loop = "loop"

;console.log(boolean);
console.log(breakp);
console.log(loop);

// var = variables

// Strings- Strings are the names without numbers.

var name = "Argho Chakma";
var company = "Shakti Foundation For Disadvantaged Women 1234";

console.log(name);
console.log(typeof company);

// Numeric Variables
// Numeric variables are numbers only (positive, negative, even, Odd, % etc)

var weight = 50 ;
var PhoneNumber = 123456789 ;

console.log(PhoneNumber) ;

// Number e "" ' na dileo chole

// Boolean
// boolean true false define kore

var isHero = true ;
var isVn = false ;

console.log(isVn);


// *****/\d+/g***** 
// \d → কোনো এক digit (0 থেকে 9 পর্যন্ত)

// + → এক বা একাধিক digit একসাথে

// g → global, মানে পুরো string এ যত digit sequence আছে সবগুলো খুঁজবে

// Regex = Regular Expression।
// regex ta holo /
// এটি হলো একটি pattern বা নিদিষ্ট নিয়ম যা আমরা string এর মধ্যে খুঁজে বের করতে বা match করতে ব্যবহার করি।

// মূল কাজ:

// কোন string এ কোনো নির্দিষ্ট অংশ আছে কি না চেক করা

// string থেকে নির্দিষ্ট অংশ বের করা

// string পরিবর্তন বা validate করা

var OrangePrice = 40.5;
var ApplePrice = 60;
var sample = "Argho 01588.333"
var total = OrangePrice + ApplePrice

console.log(total);

var numbers = sample.match(/\d+/g);

console.log(numbers);

var jackfruitPrice = 80.75;
var totalPrice = OrangePrice + ApplePrice + jackfruitPrice;