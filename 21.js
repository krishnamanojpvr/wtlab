const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send the HTML response with the <h1> tag
  res.end("<html><body><h1>Welcome to KMIT!</h1></body></html>");
});

// Define the server port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
