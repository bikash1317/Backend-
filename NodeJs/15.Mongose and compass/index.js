// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });


// It will through error if an error appeared and also it will through The message that We are connected bro once we are connected
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(" we are connected Bro");
});

// Schema lets you to tell that which type of data you want to get and store
var kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    var greeting = "Meow name is " + this.name
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

// It will change to the documents or .txt files and it cannot be changed Compiling
var Kitten = mongoose.model('Kitten', kittySchema);


//Making the object corresponding to schema
var Bikash = new Kitten({ name: 'Bikash' });
console.log(Bikash.name);

// We are running speak function 
Bikash.speak();


// To save the Bikash we can do is this 
Bikash.save(function (err, Bikash) {
    if (err) return console.error(err);
    Bikash.speak();
  });

// This is function arguement so we have to give this same name 
// Bikash.save(function (err, D) {
//     if (err) return console.error(err);
//     D.speak();
//   });


//This is gona find the name Bikash in the Database 
Kitten.find( {name : "Bikash"} , function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })