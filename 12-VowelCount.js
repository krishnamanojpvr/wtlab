// 12. 
// You are given a string str, and your task is to find the number of vowels and non-vowels in the string. 
//  Sample Input-1: 
// Hello 
//  Sample Output-1: 
//  Vowels: 2 
// Non-Vowels: 3
console.log("Enter a string:");
const readline = require("readline");

// Set up readline interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Function to count vowels in a string
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
};
// Read input from user
rl.on("line", (input) => {
  const len = input.length;
  const count = countVowels(input);
  console.log(`Vowels: ${count}\nNon-Vowels: ${len - count}`);
  rl.close();
});
