const http = require('http');     // Remember this 
const fs = require('fs');           // Remember this 

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{  // first arguement is request and second arguement is response 
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;  // Remember this 
    res.setHeader('Content-Type', 'text/html');   // Remember this 
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){ 
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

// Remember this code to open the server 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); 
 