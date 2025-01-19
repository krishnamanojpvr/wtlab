const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 22 },
  { name: "Eve", age: 23 },
  { name: "Frank", age: 21 },
  { name: "Grace", age: 23 },
  { name: "Hank", age: 24 },
  { name: "Ivy", age: 22 },
];

// Using map to create an array of user names
const userNames = users.map((user) => user.name);

console.log(userNames);
