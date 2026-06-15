const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 10 }
];

// Filter out items with 0 stock, then map to get just their names
const availableProductNames = products
  .filter(product => product.stock > 0)
  .map(product => product.name);

console.log(availableProductNames);
// Output: [ 'Laptop', 'Tablet' ]