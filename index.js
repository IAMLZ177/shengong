const http = require('http');

const server = http.createServer((req,res)=>{
    // 将腾讯发来的文件返回
    const echostr = req.url.split('&')[1].split('=')[1];
    res.end(echostr);
});

server.listen(80);