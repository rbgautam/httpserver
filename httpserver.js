const http = require('http');

const server = http.createServer((req,res)=>{
    const{headers,url,method} =req;
    console.log(headers,url,method);
    res.setHeader('content-type','text/HTML');
    res.setHeader('X-Powered-By','node.js')
    res.write('<h1>Hello world from Node.js</h1>');
    res.write('<h2>Node.js Http Demo</h2>');
    res.end();

});

const PORT = 5000;

server.listen(PORT, ()=> console.log(`Server started on PORT = ${PORT}`));