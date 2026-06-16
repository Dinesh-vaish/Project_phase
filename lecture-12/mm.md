# JavaScript Arrays & Higher Order Functions
A complete guide to JavaScript Arrays and commonly used Higher Order Functions for interviews.
---

## Array Creation

```javascript
let arr = [];
let arr2 = new Array();

Array.from("hello");
Array.of(1, 2, 3);
```

---

## Add Elements

| Method    | Description         |
| --------- | ------------------- |
| push()    | Add at end          |
| unshift() | Add at beginning    |
| splice()  | Add at any position |

```javascript
arr.push(10);
arr.unshift(5);
arr.splice(1, 0, 7);
```

---

## Remove Elements

| Method   | Description             |
| -------- | ----------------------- |
| pop()    | Remove last element     |
| shift()  | Remove first element    |
| splice() | Remove specific element |

```javascript
arr.pop();
arr.shift();
arr.splice(2, 1);
```

---

## Search Methods

```javascript
includes()
indexOf()
lastIndexOf()
find()
findIndex()
some()
every()
```

### Example

```javascript
const nums = [10, 20, 30, 40];

nums.includes(20);
nums.indexOf(30);
nums.find(num => num > 25);
nums.findIndex(num => num > 25);
nums.some(num => num > 35);
nums.every(num => num > 0);
```

---

# Higher Order Functions

Higher Order Functions are functions that:

* Accept another function as an argument.
* Return a function.

---

## forEach()

```javascript
arr.forEach(item => {
  console.log(item);
});
```

✔ Iterates through array
❌ Does not return a new array

---

## map()

```javascript
const doubled = arr.map(item => item * 2);
```

✔ Returns new array
✔ Used for transformation

---

## filter()

```javascript
const even = arr.filter(item => item % 2 === 0);
```

✔ Returns filtered elements

---

## reduce()

```javascript
const sum = arr.reduce(
  (acc, curr) => acc + curr,
  0
);
```

✔ Converts array into a single value

---

## reduceRight()

```javascript
const result = arr.reduceRight(
  (acc, curr) => acc + curr
);
```

✔ Processes array from right to left

---

## some()

```javascript
arr.some(item => item > 10);
```

Returns `true` if at least one element matches.

---

## every()

```javascript
arr.every(item => item > 0);
```

Returns `true` if all elements match.

---

# Iteration Methods

```javascript
for
for...of
forEach()
map()
filter()
reduce()
reduceRight()
```

---

# Array Transformation

```javascript
map()
filter()
flat()
flatMap()
```

## flat()

```javascript
const arr = [1, [2, 3], [4, 5]];

console.log(arr.flat());
```

Output:

```javascript
[1, 2, 3, 4, 5]
```

---

## flatMap()

```javascript
const result = [1, 2, 3].flatMap(
  x => [x, x * 2]
);
```

Output:

```javascript
[1, 2, 2, 4, 3, 6]
```

---

# Sorting Methods

```javascript
sort()
reverse()
toSorted()
toReversed()
```

### sort()

```javascript
arr.sort((a, b) => a - b);
```

### reverse()

```javascript
arr.reverse();
```

### toSorted()

```javascript
const sorted = arr.toSorted();
```

### toReversed()

```javascript
const reversed = arr.toReversed();
```

---

# Copy Arrays

```javascript
slice()
concat()
spread (...)
Array.from()
```

### slice()

```javascript
const part = arr.slice(1, 4);
```

### concat()

```javascript
const merged = arr1.concat(arr2);
```

### Spread Operator

```javascript
const copy = [...arr];
```

---

# Modify Arrays

```javascript
splice()
fill()
copyWithin()
```

### fill()

```javascript
arr.fill(0);
```

### copyWithin()

```javascript
arr.copyWithin(1, 3);
```

---

# String Conversion

```javascript
join()
toString()
```

### join()

```javascript
arr.join("-");
```

### toString()

```javascript
arr.toString();
```

---

# Array Property

```javascript
length
```

```javascript
console.log(arr.length);
```

---

# Most Important Interview Methods

```javascript
push()
pop()
shift()
unshift()
splice()
slice()
map()
filter()
reduce()
find()
findIndex()
includes()
sort()
reverse()
forEach()
```

---

# Common Interview Questions

1. Reverse Array
2. Find Largest Element
3. Find Second Largest Element
4. Remove Duplicates
5. Rotate Array
6. Move Zeroes to End
7. Two Sum
8. Merge Sorted Arrays
9. Find Missing Number
10. Kadane's Algorithm

---

## Quick Revision

### map vs forEach

| map()             | forEach()         |
| ----------------- | ----------------- |
| Returns new array | Returns undefined |
| Chainable         | Not chainable     |
| Transformation    | Iteration         |

### slice vs splice

| slice()      | splice()            |
| ------------ | ------------------- |
| Non-mutating | Mutating            |
| Creates copy | Add/Remove elements |

---

### Author

JavaScript Interview Notes
