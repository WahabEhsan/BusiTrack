var mongoose = require('mongoose');
var bcrypt = require("bcrypt");
var businessClass require('../app/models/BusinessClass');

var userSchema = mongoose.Schema({
    local: {
            username:String,
            password:String,
			business:[businessClass]
            }
});
userSchema.methods.generateHash = function(password){
    return bycrypt.hashSync(password, bcrypt.genSaltSync(9));
}
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
}
userSchema.methods.addBusiness = function(business){
	this.local.business.push(business)
}
userSchema.methods.updateBusiness = function(business){
	this.local.business = business
}
module.exports = mongoose.model('User', userSchema);