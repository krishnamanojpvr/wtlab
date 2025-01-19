function findMostFrequent(arr) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentItem = null;

  // Count the frequency of each item in the array
  for (let item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    if (frequencyMap[item] > maxFrequency) {
      maxFrequency = frequencyMap[item];
      mostFrequentItem = item;
    }
  }
  return {
    item: mostFrequentItem,
    frequency: maxFrequency,
  };
}
const array = [1, 2, 3, 2, 4, 5, 2, 3, 3, 3];
const result = findMostFrequent(array);
console.log("Array: ", array);
console.log("Most Frequent Item: ", result.item);
console.log("Frequency: ", result.frequency);
