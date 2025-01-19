function swapCase(inputString) {
  let swappedString = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    // Check if the character is uppercase
    if (char === char.toUpperCase()) {
      swappedString += char.toLowerCase();
    } else {
      swappedString += char.toUpperCase();
    }
  }
  return swappedString;
}
const input = "The Quick Brown Fox";
const result = swapCase(input);
console.log("Input String: ", input);
console.log("Swapped Case String: ", result);
