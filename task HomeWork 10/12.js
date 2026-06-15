const productItems = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

// 1. Extract all prices
const prices = productItems.map(item => item.price);
console.log("Prices:", prices);
// Output: [ 50000, 20000, 15000 ]

// 2. Find the highest price using Math.max with spread operator
const highestPrice = Math.max(...prices);
console.log("Highest Price:", highestPrice);
// Output: 50000