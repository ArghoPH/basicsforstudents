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

// ************Loop only**************


