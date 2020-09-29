console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// By Not Creating Object
// module.exports = average;


//Object Creating 
// module.exports = {
//     avg: average,
//     name: "Harry",
//     repo: "GitHub"
// }

// This exports only one of the element of the object
module.exports.name = "Harry";
  