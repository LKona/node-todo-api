// const MongoClient = require('MongoDB').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log("Could not connect to MongoDB server")
	}
	console.log("Connected to MongoDB server")

    // db.collection('Todos').insertOne({
    // 	'text':'Something to do',
    // 	'completed': false
    // },(err,result) =>{
    // 	if(err){
    // 		return console.log("Unable to insert todo: ", err)
    // 	}
    // 	console.log(JSON.stringify(result.ops, undefined, 2)) //ops attribute stores all the documents that were inserted.
    // })

    db.collection('Users').insertOne({
    	'name':'LK',
    	'age': 25,
    	'location':'Sunnyvale'
    },(err,result) =>{
    	if(err){
    		return console.log("Unable to insert user: ", err)
    	}
    	// console.log(JSON.stringify(result.ops, undefined, 2)) //ops attribute stores all the documents that were inserted.
    	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    })


	db.close()
})