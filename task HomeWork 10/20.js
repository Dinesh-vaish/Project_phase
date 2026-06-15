const examResults = [
  { name: "John", marks: 40 },
  { name: "Emma", marks: 60 },
  { name: "Alex", marks: 70 }
];

const passingStudentNames = examResults
  .filter(student => student.marks > 50)
  .map(student => student.name);

console.log(passingStudentNames);
// Output: [ 'Emma', 'Alex' ]