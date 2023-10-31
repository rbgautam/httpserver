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
   

    
    let body =[];
    req
    .on('data',chunk=>{
        body.push(chunk);
    })
    .on('end',()=>{
        body =Buffer.concat(body).toString();
        console.log(body);
        let status =404;
        const response ={
            success:false,
            data:null
        };

        if(method === 'GET' && url === '/todos'){
            status =200;
            response.data= jsObjData;
            response.success = true;
        }
        else if(method === 'POST' && url === '/todos'){

            status =201;
            var bodydata = JSON.parse(body);
            jsObjData.push(bodydata);
            response.data = jsObjData;

        } 
        else if(method === 'DELETE'){
            
            status =201;
            var {id,text} = JSON.parse(body);
            // console.log(jsObjData);
            jsObjData.forEach(element => {
                if(element.id === id)
                jsObjData.pop(element);
            });
           
            response.data = jsObjData;

        } 

        res.writeHead(status,{
            'content-type':'application/JSON',
            'X-Powered-By':'node.js'
        });

        
        res.end(
            JSON.stringify(response)
        );
    })


    

});

const PORT = 5000;

server.listen(PORT, ()=> console.log(`Server started on PORT = ${PORT}`));