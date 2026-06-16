const text = "The fox is quick. The fox is smart.";
const words = text.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
const foxCount = words.filter(word => word === "fox").length;
console.log(foxCount); 