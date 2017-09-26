const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb')
const {User} = require('./../server/models/user')


var id = "69c7d60fbc730f658034f1eaqw"
var userid = "59c522f0eb822de59702951a"

if(!ObjectID.isValid(id)){
	console.log('ID is not valid')
}

Todo.find({
	_id:id
}).then((todos)=>{
	console.log('Todos', todos)
}) 

Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log('Todo', todo)
}) 

Todo.findById(id).then((todo)=>{
	if(!todo){
		console.log("ID not found")
	}
	console.log('Todo by ID', todo)
}).catch((e) => console.log(e))

User.findById(userid).then((user)=>{
	if(!user){
		console.log("User not found")
	}
	console.log(JSON.stringify(user,undefined,2))
}).catch((e) => console.log(e))