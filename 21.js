// 21. 
// Create a simple Node.js application and serves it via an HTTP server  
// (without using Express).  
// The response of the server should display a text 
// "Welcome to KMIT!" inside an <h1> tag on the webpage. 
 
// Ensure that you have submitted the correct URL,  
// checks for the presence of the <h1> tag, and validates the text content. 


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
