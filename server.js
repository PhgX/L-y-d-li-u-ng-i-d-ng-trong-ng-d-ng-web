const http = require('http');
const url = require('url');
const StringDecoder = require('node:string_decoder').StringDecoder;

let server = http.createServer((req, res) => {
   let decoder = new StringDecoder('utf-8');
   let buffer = '';
   req.on('data', (data)=>{
    buffer += decoder.write(data);
   })
   req.on('end', ()=>{
    console.log(buffer);
    res.end();
   })
})

server.listen(8080, ()=> {
    console.log('Sever is running on port 8080')
})