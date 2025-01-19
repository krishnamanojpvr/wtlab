// 16. 
// Find Users Who Are Adults Using filter() 
// Task: Given an array of users with ages, filter out those who are 18 years or older. 
// Output: 
// [  
//   { name: 'Bob', age: 20 },                                                      
//   { name: 'David', age: 18 },                                                    
//   { name: 'Eve', age: 22 },                                                      
//   { name: 'Grace', age: 19 },                                                    
//   { name: 'Hank', age: 21 },                                                     
//   { name: 'Jack', age: 18 }  
// ] 

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 18 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 15 },
  { name: "Grace", age: 19 },
  { name: "Hank", age: 21 },
  { name: "Ivy", age: 17 },
  { name: "Jack", age: 18 },
];

// Implement your logic here and store the result as "adults".
const adults = users.filter((user) => user.age >= 18);

console.log(adults);
