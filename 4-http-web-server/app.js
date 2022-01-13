const http = require('http');

const server = http.createServer((req,res) =>{
    const url = req.url;
    if(url==='/index'){
        res.writeHead(200,{ "Content-Type": "text/html" });
        res.write('<h2>index page</h2>')
    }else if(url ==='/about'){
        res.writeHead(200,{ "Content-Type": "text/html" });
        res.write('<h2>about page</h2>')
    }else if(url ==='/contact'){
        res.writeHead(200,{ "Content-Type": "text/html" });
        res.write('<h2>contact page</h2>')
    }else{
        res.writeHead(404,{ "Content-Type": "text/html" });
        res.write('<h2>404 page</h2>')
    }
    res.end();
});

server.listen(5000, ()=>{
    console.log('sunucu 5000 portunda başlatıldı');
})