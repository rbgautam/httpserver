const http = require('http');

const server = http.createServer((req,res)=>{
    const{headers,url,method} =req;
    console.log(headers,url,method);
    res.write('Hello to Node.js');
    res.end();

});

const PORT = 5000;

server.listen(PORT, ()=> console.log(`Server started on PORT = ${PORT}`));