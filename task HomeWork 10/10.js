const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

const loginCount = actions.filter(item => item.action === "login").length;

console.log(loginCount);
// Output: 2