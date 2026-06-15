const text = "The fox is quick. The fox is smart.";

// Convert to lowercase, remove punctuation, and split into an array of words
const words = text.toLowerCase().replace(/[^\w\s]/g, "").split(" ");

// Filter array to find only matches for "fox" and get the length
const foxCount = words.filter(word => word === "fox").length;

console.log(foxCount); 
// Output: 2