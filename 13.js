// 13. 
// You are given two sorted arrays, arr1 and arr2. Your task is to merge these two arrays into a single sorted 
// array. Both input arrays are already sorted in non-decreasing order. The output should also be a sorted array 
// that contains all elements from both arr1 and arr2. 
// Sample Input: 
// 1 3 5 
// 2 4 6 
// Sample Output: 
// 1 2 3 4 5 6 

const readline = require("readline"); // Set up readline interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // Function to merge two sorted arrays
const mergeSortedArrays = (arr1, arr2) => {
  let merged = [];
  let i = 0,
    j = 0; // Merge arrays while both have elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    // Add remaining elements from arr1 (if any)
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    // Add remaining elements from arr2 (if any)
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}; // Function to read input and process arrays
const processInput = () => {
  rl.question("", (input1) => {
    const arr1 = input1.split(" ").map(Number); // Convert input string to an array of numbers
    rl.question("", (input2) => {
      const arr2 = input2.split(" ").map(Number); // Convert input string to an array of numbers
      const mergedArray = mergeSortedArrays(arr1, arr2);
      console.log("merge sorted array : " + mergedArray.join(" "));
      rl.close();
    });
  });
};
processInput();
