let numbers = [12, 14,15, 11, 9, 112];

for (num of numbers) {
    console.log(num);
    console.log('the age is');
}


let numberss = [10, 20, 30, 40, 50];

for (num of numberss){
    console.log('The numner is' + num);
}

let name = "Rahim";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old`);


let movie = "Inception";
let director = "Christopher Nolan";
let year = 2010;

console.log(`${movie} is directed by ${director} and realesed in ${year}`);

let celsius = 30;

console.log(`${celsius} is equal to ${celsius * 9/5 + 32}F `);




// Task:

// Loop ব্যবহার করে প্রতিটি student এর name, marks, এবং grade প্রিন্ট করো।

// Grade rules:

// 80+ → A

// 70–79 → B

// 60–69 → C

// 50–59 → D

// Below 50 → F

// Template string দিয়ে প্রিন্ট:

let studentsss = [
  { name: "Ray", marks: 85 },
  { name: "Rahim", marks: 72 },
  { name: "Karim", marks: 58 },
  { name: "Jamal", marks: 91 }
];

for (let student of studentsss) {
  let grade;
  if (student.marks >= 80) grade = "A";
  else if (student.marks >= 70) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else if (student.marks >= 50) grade = "D";
  else grade = "F";

  console.log(`${student.name} scored ${student.marks} marks and got grade ${grade}`);
}


// **********Loop only *********************

let num = 1;

while(num <= 10){
    console.log(num);
    num++;
}