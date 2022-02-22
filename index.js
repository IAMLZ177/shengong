const http = require('http');

const server = http.createServer((req,res)=>{
    console.dir(req);
    res.end('true');
});

server.listen(80);