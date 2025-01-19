const fs = require("fs");
const path = require("path");

// Define the file path
const filePath = path.join(__dirname, "sample.txt");

// Read the file content asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  // Display the content on the screen
  console.log("File Content:");
  console.log(data);
});
