const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

const totalRevenue = sales.reduce((total, sale) => total + sale.amount, 0);

console.log(totalRevenue); 
// Output: 900