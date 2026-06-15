const numbersList = [1, 2, 3, 4, 5, 6];

const squaredEvens = numbersList
  .filter(num => num % 2 === 0)
  .map(num => num ** 2);

console.log(squaredEvens);
// Output: [ 4, 16, 36 ]