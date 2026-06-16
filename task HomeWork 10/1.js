const students =[
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];
const studentAverages = students.map(student =>{
  const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = totalMarks/student.marks.length;
  return {
    name: student.name,
    average: Number(average.toFixed(2)) 
  };
});
console.log(studentAverages);