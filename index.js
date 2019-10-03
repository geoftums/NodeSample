const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
  res.writeHead(200,{'Content-Type':'application/pdf'});
  fs.readFile('./ang.pdf',(err,file)=>{
        res.end(file);
   });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Testing...");
console.log("Server running at http://localhost:%d", port);

