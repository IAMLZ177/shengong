const http = require('http');

const server = http.createServer((req,res)=>{
    const echostr = req.url.split('&')[1].split('=')[1];
    res.end(echostr);
});

server.listen(80);