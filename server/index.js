const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', function(req, res){
	res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

app.listen(port, console.log("Server running at port: " + port))