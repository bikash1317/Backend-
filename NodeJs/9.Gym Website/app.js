const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF/CONFIGURATION
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())   // This will save the data in the backend 
// PUG SPECIFIC STUFF/CONFIGURATION
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
  
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content":con}
    // status 200 means that it successfully done the job 
    // If you are using templates then we use render 
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    // console.log(req.body) If we want to see in the terminal 
    // If we want to save in a file then we do is this down below 
    name = req.body.name;
    age = req.body.age;
    address = req.body.address;
    gender = req.body.gender;
    more = req.body.more;

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'title': 'Message'} 
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
