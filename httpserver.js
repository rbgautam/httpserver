const http = require('http');
const jsObjData =[
    {id:1,text:'Todo One'},
    {id:2,text:'Todo Two'},
    {id:3,text:'Todo Three'},
    {id:4,text:'Todo Four'}
]
    

const server = http.createServer((req,res)=>{
    const{headers,url,method} =req;
    console.log(headers,url,method);
   

    res.writeHead(200,{
        'content-type':'application/JSON',
        'X-Powered-By':'node.js'
    });
    let body =[];
    req
    .on('data',chunk=>{
        body.push(chunk);
    })
    .on('end',()=>{
        body =Buffer.concat(body).toString();
        console.log(body);
    })


    res.end(
        JSON.stringify({
        success:true,
        data:jsObjData
    })
    );

});

const PORT = 5000;

server.listen(PORT, ()=> console.log(`Server started on PORT = ${PORT}`));