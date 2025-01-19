const http = require("http");
const fs = require("fs");
const path = require("path");
// Create an HTTP server
const server = http.createServer((req, res) => {
  let filePath = "";
  let statusCode = 200;
  // Handle different routes
  switch (req.url) {
    case "/":
    case "/home":
      filePath = path.join(__dirname, "home.html");

      break;
    case "/about":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/contact":
      filePath = path.join(__dirname, "contact.html");
      break;
    default:
      filePath = path.join(__dirname, "404.html");
      statusCode = 404;
      break;
  }
  // Read and serve the HTML file
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal Server Error</h1>");
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});
// Set the server to listen on port 5000
server.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
