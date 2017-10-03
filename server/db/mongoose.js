var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //Telling Mongoose that we will be using promises.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}