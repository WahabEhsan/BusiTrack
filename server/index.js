const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/html/login.html'));
});

app.listen(port, console.log("Server running at port: " + port))