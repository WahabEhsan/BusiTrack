var mongoose = require('mongoose');
var objectClass = require('../app/models/ObjectClass');

//the single business that will contain an array of objects to load
var businessClass = mongoose.Schema({
	local: {
		//will be 0 to n for however many business the user has
		id:String,
		//the username that will be the same for a group of business based on id
		userid:String,
		name:String,
		color:String,
		//the single business will have the collection of objects that are the content
		objects:[objectClass]
}
});
//using the username and checking the id it will return the refrenced business
businessClass.methods.pull = function(username,id){
	//placeholder will query the database for matches to the id for this business that
	//is also owned by the username in question
	return this.local.businessClass;
}

businessClass.methods.updateColor = function(color){
	this.local.color = color;
}

businessClass.methods.updateName = function(name){
	this.local.name = name;
}

businessClass.methods.addObject = function(object){
	this.local.objects.push(object);
}
businessClass.methods.updateObject = function(objects){
	this.local.objects = objects;
}



