const spending = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 30000 }
];

const totalSpending = spending.reduce((sum, record) => sum + record.amount, 0);

console.log(totalSpending);
// Output: 80000