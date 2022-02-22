const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('true');
});

server.listen(80);