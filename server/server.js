var express = require('express')
var bodyParser = require('body-parser') // parses the body, converts the string to an object and sends it to the express server and express can do something with it.



var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();

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

app.listen(3000, () =>{
	console.log('Started on port 3000')
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