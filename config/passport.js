var LocalStrategy = require('passport-local').Strategy;


var User          = require('../app/models/user.js');
var MongoUser    = require('../app/models/webmodels/DB_models/createUser.js');
var MongoVerify = require('../app/models/webmodels/DB_models/authenticate.js');
var Connect = require('../app/models/webmodels/DB_models/connect.js');
module.exports = function(passport) {


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});


	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
		process.nextTick(function(){
			MongoVerify.main(username)
			function verifier(){
				console.log(Connect.temp+2);
				if(Connect.temp != null){
					return done(null, false, req.flash('signupMessage', 'That username already taken'));
				} else {
					var newUser = new User();
					newUser.local.username = username;
					newUser.local.password = newUser.generateHash(password);
					MongoUser.main(newUser.local.username,newUser.local.password);
				}
			}
			setTimeout(verifier,2000);
				// if(err)
					// return done(err);
				// if(user){
					// return done(null, false, req.flash('signupMessage', 'That email already taken'));
				// } else {
					// var newUser = new User();
					
					// newUser.local.username = username;
					// newUser.local.password = newUser.generateHash(password);
					// MongoUser.main(newUser.local.username,newUser.local.password);
					// newUser.save(function(err){
						// if(err)
							// throw err;
						// return done(null, newUser);
					// })
				})
			

	}));
	

	passport.use('local-login', new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, username, password, done){
			process.nextTick(function(){
				MongoVerify.main(username)
			function verifier(){
				console.log(Connect.temp+2);
				if(Connect.temp === null){
					return done(null, false, req.flash('loginMessage', 'No User found'));
				} 
				var loggedUser = new User();
				loggedUser.local.password = Connect.temp.password;
				console.log(Connect.temp.password);
				console.log(loggedUser.local.password);
				if(!loggedUser.validPassword(password)) {
					console.log('failed here')
					return done(null, false, req.flash('loginMessage', 'invalid password'));
				}
				else{
					return done(null, loggedUser);
				}
				// User.findOne({ 'local.username': username}, function(err, user){
					// if(err)
						// return done(err);
					// if(!user)
						// return done(null, false, req.flash('loginMessage', 'No User found'));
					// if(!user.validPassword(password)){
						// return done(null, false, req.flash('loginMessage', 'invalid password'));
					// }
					// else{

					// return done(null, user);
					// }
				// });
			}
			setTimeout(verifier,2000);
			});
		}
	));


};