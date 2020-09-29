 // console.log(average([3,4]))    We can do this two without creating object
// const average = require("./mod");   We can do this two without creating object
const mod = require("./mod");  // object creation required
// console.log(mod.avg([3,4]))  // object creation required
console.log(mod.name)        // module.exports.name = "Harry";     
console.log("This is index.js");

 