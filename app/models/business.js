var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	local: {
		username: String,
		busiName: String,
		color: String,
		objects: Array
	}
	
});

module.exports = mongoose.model('business', userSchema);