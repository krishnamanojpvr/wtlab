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
// Implement your logic here  and store the result as "groupedByAge".
const groupedByAge = users.reduce((acc, user) => {
  // If the age group doesn't exist in the accumulator, create it
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  // Push the user's name into the corresponding age group
  acc[user.age].push(user.name);
  return acc;
}, {});
console.log(groupedByAge);
