// const MongoClient = require('MongoDB').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log("Could not connect to MongoDB server")
	}
	console.log("Connected to MongoDB server")

    //////Find all docs.
    // db.collection('Todos').find({completed:false}).toArray().then((docs) =>{  //Gives back the documents in an array.
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs,undefined,2))
    //     },(err)=> {
    //         console.log("Unable to find docs", err)
    //     })

    //Since _id is an object and not a string, we cannot simply pass it to find. We have to first generate the ObjectID object.
    //Find docs by ID
  // db.collection('Todos').find({
  //   _id:new ObjectID('59c12d2645a2ba4fe00df53e')
  //   }).toArray().then((docs) =>{  //Gives back the documents in an array.
  //       console.log('Todos')
  //       console.log(JSON.stringify(docs,undefined,2))
  //       },(err)=> {
  //           console.log("Unable to find docs", err)
  //       })

    //Count all docs
     // db.collection('Todos').find().count.then((count) =>{  //Gives back the documents in an array.
     //    console.log('Todos count')
     //    console.log(count)
     //    },(err)=> {
     //        console.log("Unable to find docs", err)
     //    })

    db.collection('Users').find({name:'Jen'}).toArray().then((docs) =>{  //Gives back the documents in an array.
        console.log('Todos count')
        console.log(JSON.stringify(docs,undefined,2))
        },(err)=> {
            console.log("Unable to find docs", err)
        })

	// db.close()
})