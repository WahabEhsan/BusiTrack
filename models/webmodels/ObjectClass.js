var mongoose = require('mongoose');
//the single object like employees which will contain array of entries like the employee 
//name
var objectClass = mongoose.Schema({
	local: {
		//will be 0 to n for however many objects the business has
		id:String,
		//the business that will be the same for a group of objects based on id
		businessid:String,
		name:String,
		lastobject:String,
		//the single object will have content that will be stored here
		stringArray:[String]
	}
});
//will use businessid to get the current id reference from array and then
//return that object 
	objectClass.methods.pull = function()
	{
		return this.local.objectClass
	}
	//adds the new object into the stringarray and updates lastobject
	objectClass.methods.addString = function(object)
	{
		this.local.stringArray.push(object);
		this.local.lastobject = object;
	}
	//any changes to the objects or there deletion will call this
	//with the updated array
	objectClass.methods.updateString = function(stringArray)
	{
		this.local.stringArray = stringArray;
	}