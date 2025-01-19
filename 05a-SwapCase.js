// 5a .  
// Write a JavaScript program which accepts a string as input and swap the case of each character. For example, 
// if you input 'The Quick Brown Fox' the output should be 'tHEqUICKbROWNfOX'.  

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
