var express = require('express')
var bodyParser = require('body-parser') // parses the body, converts the string to an object and sends it to the express server and express can do something with it.



var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')
const {ObjectID} = require('mongodb')

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos',(req,res) =>{
	var todo = new Todo({
		text:req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc)
	}, (e) => {
		res.status(400).send(e)
	})
})

app.get('/todos', (req,res) =>{
	Todo.find().then((todos) => {
		res.send({todos}) //If you pass todos array as such , we cannot run custom methods on it. So pass in an object so that in future we can add some custom functions to it.
	},(e) => {
		res.status(400).send(e)
	})
})

app.get('/todos/:id',(req,res) =>{
	// res.send(req.params);
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
	    return res.status(404).send()
	}
	Todo.findById(id).then((todo)=>{
	if(!todo){
		return res.status(404).send(e)
	}
	res.send({todo})
   }).catch((e) => res.status(400).send(e))
})

app.listen(port, () =>{
	console.log(`Started on port ${port}`)
})


module.exports ={app}


















// var newUser = new User({
// 	email: 'abc@domain.com'
// });
// //Responsible for saving the doc to mongodb
// newUser.save().then((doc) =>{
// 	console.log('Saved user', doc)
// },(e) =>{
// 	console.log('Unable to save user')
// }) 



// var newTodo = new Todo({
// 	text: 'Workout in the AM'
// });
// //Responsible for saving the doc to mongodb
// newTodo.save().then((doc) =>{
// 	console.log('Saved todo', doc)
// },(e) =>{
// 	console.log('Unable to save todo')
// }) 