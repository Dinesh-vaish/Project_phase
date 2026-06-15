const usersList = [
  { name: "John", age: 25 },
  { name: "Emma", age: 16 },
  { name: "Alex", age: 20 }
];

const adultNames = usersList
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(adultNames);
// Output: [ 'John', 'Alex' ]