const http = require("http");
const fs = require("fs");
const path = require("path");
// Create the server
const server = http.createServer((req, res) => {
  const url = req.url; // Get the URL of the request
  if (url === "/") {
    // Serve the homepage
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (url === "/products") {
    // Serve the products page
    fs.readFile(path.join(__dirname, "products.html"), "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });

        res.end("Error reading file");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    // Serve a 404 page for unknown routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});
// Define the server port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
