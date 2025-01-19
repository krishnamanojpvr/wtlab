// 6d. 
// Write a JavaScript program to sort a list of elements using Quick sort. 
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0]; // Choose the first element as the pivot
  const left = [];
  const right = [];
  // Manually partition the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
let unsortedArray = [3, 6, 8, 10, 1, 2, 1];
console.log("Quick Sort : " + quickSort(unsortedArray));
