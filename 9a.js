// 9a. 
// Write a Node JS program that accepts a port from the user and runs a node server at that port.

const http = require("http");
const readline = require("readline");
// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // Function to start the server
function startServer(port) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  });
  server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
  });
  server.on("error", (err) => {
    console.error(`Error starting server: ${err.message}`);
  });
} // Prompt user for port number
rl.question("Enter the port number to run the server: ", (port) => {
  const portNumber = parseInt(port, 10);
  if (isNaN(portNumber) || portNumber <= 0 || portNumber > 65535) {
    console.log(
      "Invalid port number. Please enter a number between 1 and 65535."
    );
    rl.close();
  } else {
    startServer(portNumber);
    rl.close();
  }
});
