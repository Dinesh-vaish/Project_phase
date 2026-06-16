const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];
const salaries = employees.map(employee => employee.salary);
console.log("Salaries:", salaries); 
const totalSalary = salaries.reduce((total, salary) => total + salary, 0);
console.log("Total Salary Paid:", totalSalary); 
