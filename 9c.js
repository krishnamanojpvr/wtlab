const fs = require("fs");
const readline = require("readline");
const path = require("path");
// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Prompt user for file name
rl.question("Enter the file name: ", (fileName) => {
  const filePath = path.join(__dirname, fileName);
  // Prompt user for text to add
  rl.question("Enter the text to add: ", (text) => {
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // File does not exist, create new file and write text
        fs.writeFile(filePath, text, (err) => {
          if (err) {
            console.error("Error creating file:", err.message);
          } else {
            console.log("File created and text added successfully.");
          }
          rl.close();
        });
      } else {
        // File exists, append text
        fs.appendFile(filePath, text, (err) => {
          if (err) {
            console.error("Error appending to file:", err.message);
          } else {
            console.log("Text appended to file successfully.");
          }
          rl.close();
        });
      }
    });
  });
});
