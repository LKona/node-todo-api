// const MongoClient = require('MongoDB').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log("Could not connect to MongoDB server")
	}
	console.log("Connected to MongoDB server")


//deleteMany - delete all or multiple rows that match the criteria
// db.collection('Todos').deleteMany({text:'Study'}).then((result) =>{
//   console.log(result)
// })

//deleteOne - deletes the first doc that matches.

// db.collection('Todos').deleteOne({text:'Study'}).then((result) =>{
//   console.log(result)
// })

//findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
//   console.log(result)
// })

// db.collection('Users').deleteMany({name:'LK'}).then((result) =>{
//   console.log(result)
// })


//Trying to delete a doc that doesn't exist - Below is not working as expected.
// db.collection('Users').findOneAndDelete({_id:new ObjectID('59c298285b2cdb62f89b38')}).then((result) =>{
//   console.log(JSON.stringify(result, undefined, 2))},(err) =>{
//       console.log("Could not delete: ", err)
//   })


	// db.close()
})