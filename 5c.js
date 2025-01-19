// 5c. 
// Write a JavaScript program to remove duplicate items from an array 
//option 1
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

// Example usage:
const array1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = removeDuplicates(array1);

console.log(uniqueArray1); // Output: [1, 2, 3, 4, 5]

// option 2

function removeDuplicates(arr) {
  // Use a Set to store unique values, as it automatically removes duplicates
  return [...new Set(arr)];
}

// Example usage:
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
