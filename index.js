const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end('true');
});

server.listen(80);