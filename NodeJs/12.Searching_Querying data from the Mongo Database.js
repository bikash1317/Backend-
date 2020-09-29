// Searching for data in mongo db
use Bikash

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})  // it will give the rating which are greater than or equal to 3.5 
db.items.find({rating: {$gt: 3.5}})   // it will give the rating which are greater than 3.5
// And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}}) // lt less than
db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

// OR Operator 
db.items.find({  $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] })

db.items.find({rating: {$gt: 3.5}}, {rating: 1})
