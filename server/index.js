//imports
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const session = require('express-session');

//access .env file 
require('dotenv').config();
const port = process.env.PORT || 5000;
const URI = process.env.ATLAS_URI;

//connect to mongo db
await mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', function(){
	console.log("MongoDB connection established!");
})

app.use(cors());
app.use(express.json());
app.use(session({
	'secret': 'thisisusedtocreatethehash'
}))

let User = require('models/user.model');

//routes 
app.get('/', function(req, res){
	res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

app.post('/signup', function(req, res){
	const userData = {
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone
		//id: hash,
	}
	//id = hash;
	const newUser = new User(userData);
	
	newUser.save()
	.catch(err => res.status(400).json('Error: ' + err));


})

//run server
app.listen(port, console.log("Server running at port: " + port))