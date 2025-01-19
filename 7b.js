function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  // Loop through the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If no elements were swapped, the array is already sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
}
// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
