const http = require('http');

const server = http.createServer((req,res) =>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("Azure Testing...");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

