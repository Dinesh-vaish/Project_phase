const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

// 1. Extract only employee salaries
const salaries = employees.map(employee => employee.salary);
console.log("Salaries:", salaries); 
// Output: [ 50000, 40000, 60000 ]

// 2. Find the total salary paid
const totalSalary = salaries.reduce((total, salary) => total + salary, 0);
console.log("Total Salary Paid:", totalSalary); 
// Output: 150000