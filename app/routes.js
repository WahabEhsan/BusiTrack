var User = require('./models/user.js');
var cors = require('cors');
var express = require('express');
var app = express();
var MongoGetBusiness = require("./models/webmodels/DB_models/getBusinesses.js");
var Connect = require("./models/webmodels/DB_models/connect.js");
module.exports = function(app, passport){
	
	app.use(cors());
	/*login sequence will take the data sent to it and run it thrrough passport
	if passport returns true then they are logged in and the user data
	for that person is sent
	need to work on this some more to ensure that the mongoose schema is correct*/
    var business;
	 app.post('/login', function (req, res, next) {
			
			 console.log(req)
			 next()
		 },
		 passport.authenticate('local-login'),
		 (req, res) => {
			 console.log('logged in', req.user);
			 var userInfo = {
				 user: req.user
             };
             MongoGetBusiness.main(req.username);
             business = req.user.local.business;

             res.send(userInfo);
             console.log('USER Business: ' + req.session.userBusiness)
		 }
	 );
	/*when data is modified (any data) then it will call update data to get the new user data and overwrite the old
	found this to be easier then expected. so might be some pifalls will need to go over it with everyone*/
	// app.post('/updatedata', function(req,res){
	// var user = req.user;
	// /* this is for testing but body is not required if the object is modified in react.*/
	// user.local.business = req.body.business;
	// user.local.object = req.body.business;
	// /*end testing zone*/
	// console.log(req);
	// user.save(function(err){
			// if(err)
				// throw err;
			// res.redirect('/profile');
	// })
	// });
	/*signup needs some work to ensure react redirects correctly but
	its system is functioning for name and password matching*/
	app.post('/signup', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { 
	//On failure enter changes here
	return res.redirect('/signup'); 
	}
    req.logIn(user, function(err) {
      if (err) { return next(err); 
	  }
	  //on success enter changes here
      return res.redirect('/');
    });
  })(req, res, next);
    });

    app.get('/fetchBusiness', function (req, res) {
        console.log(Connect.temp.businesses);
        res.send(Connect.temp.businesses);
        
    })

// app.get('/', function(req, res){
		// res.render('login.ejs', { message: req.flash('loginMessage') });
	// });

	// app.get('/login', function(req, res){
		// console.log('success');
		// res.render('login.ejs', { message: req.flash('loginMessage') });
	// });
	
// app.post('/signup', passport.authenticate('local-signup', {
		// successRedirect: '/',
		// failureRedirect: '/signup',
		// failureFlash: true
	// }));

	
	// app.post('/login', passport.authenticate('local-login', {
		
		// successRedirect: '/profile',
		// failureRedirect: '/fail',
		// failureFlash: true
	// }));
	
	// app.get('/signup', function(req, res){
		// res.render('signup.ejs', { message: req.flash('signupMessage') });
	// });


	

	// app.get('/profile', isLoggedIn, function(req, res){
		// res.render('profile.ejs', { user: req.user });
	// });

	// app.get('/logout', function(req, res){
		// req.logout();
		// res.redirect('/');
	// })
	
	
	
  };

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}