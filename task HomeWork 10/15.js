const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];
const totalCartValue = cart.reduce((total, prod) => total + prod.price, 0);
console.log(totalCartValue);
