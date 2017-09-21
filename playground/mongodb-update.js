// const MongoClient = require('MongoDB').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log("Could not connect to MongoDB server")
	}
	console.log("Connected to MongoDB server")


	// db.collection('Todos').findOneAndUpdate({
	// 	_id:new ObjectID('59c27cc0ab254cdb62f895b0')
	// },{
	// 	$set:{
	// 		completed:false
	// 	}
	// },
	// 	{
	// 		returnOriginal: false
	// 	}).then((result)=>{
	// 		console.log(result)
	// 	})

	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID('59c29807ab254cdb62f89b2a')
	},{
		$set:{
			name:'LK'
		},
		$inc:{
		 age:1
	 }
	}, 
		{
			returnOriginal: false
		}).then((result)=>{
			console.log(result)
		})


})