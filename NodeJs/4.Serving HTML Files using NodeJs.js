
// Serving HTML Files using NodeJs
const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('Video-55.html')

const server = http.createServer((req , res )=>{        // first arguement is request and second arguement is response 
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end(fileContent)
})

server.listen(80 , '127.0.0.1' , ()=>{
    console.log("Listening on port 80")
})