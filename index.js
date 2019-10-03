const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
  res.writeHead(200,{'Content-Type':'video/mp4'});
  var stream = fs.createReadStream('./t1.mp4');
  stream.pipe(res);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Testing...");
console.log("Server running at http://localhost:%d", port);

