var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //Telling Mongoose that we will be using promises.
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose}