const express = require("express");
const path = require("path");
const app = express();
// Always use the port as 80 
const port = 80;


// In order to use static app we can do is this 
// static files are the files which are publicly present in the server 
// These are the files which any one can use  it(download it) without login in 
app.use('/static', express.static('static')) // the last static written is the name of the folder made 

// Set the templete engine using pug 
app.set('view engine', 'pug')  

// Set the views(templete) Directory name
app.set('views', path.join(__dirname,'views'))

// Our pug demo end point
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Bikash', message: 'Hello there! thanks for telling me how to use pug' })
});
 
app.get("/", (req, res)=>{ 
    // We can see the status like this 
    res.status(200).send("This is homepage of my first express app with Harry");
});

// This is a "get"  request that can be seen in postman
app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});

// This is a "post" request that can be seen in postman
app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
