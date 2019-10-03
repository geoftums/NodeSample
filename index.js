const http = require('http');
const fs = require('fs');

const express = require('express');
const app = express();
const port = process.env.PORT || 1337;


app.get('/', (req, res) => {
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end('hello world');
 })
 
app.listen(port, () => {
  console.log('Example app listening on port 8000!');
 })


