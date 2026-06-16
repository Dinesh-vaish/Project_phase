const productItems = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];
const prices = productItems.map(item => item.price);
console.log("Prices:", prices);
const highestPrice = Math.max(...prices);
console.log("Highest Price:", highestPrice);
