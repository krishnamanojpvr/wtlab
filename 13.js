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
