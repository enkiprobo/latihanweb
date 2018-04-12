const http = require("http");

http.createServer((req, res)=> {
  res.write("Hello Wordld!");
  res.end();
}).listen(8080);
