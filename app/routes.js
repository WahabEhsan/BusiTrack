var User = require('./models/user.js');
var cors = require('cors');
var express = require('express');
var app = express();
var MongoGetBusiness = require("./models/webmodels/DB_models/getBusinesses.js");
var Connect = require("./models/webmodels/DB_models/connect.js");
var bodyParser = require('body-parser');

module.exports = function(app, passport){
	
	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	/*login sequence will take the data sent to it and run it thrrough passport
	if passport returns true then they are logged in and the user data
	for that person is sent
	need to work on this some more to ensure that the mongoose schema is correct*/
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

             res.send(userInfo);
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
        console.log('Fetch business route: ' + Connect.temp.businesses);
        res.send(Connect.temp.businesses);
        
	})
	
	app.get('/user/:business', function(req, res){
		console.log('req.params data: ' + req.params.business);
		console.log('Whatever is in connect.temp: ' + Connect.temp.businesses);

		for (var count = 0; count < Connect.temp.businesses.length; count++) {
			if (req.params.business == Connect.temp.businesses[count].businessName) {
				console.log('Business sent: ' + Connect.temp.businesses[count]);
				res.send(Connect.temp.businesses[count]);
					//businessData[count] = Connect.temp.businesses[count].businessName;
					//businessData[count] = Connect.temp.businesses[count].phoneAbrv;
					//businessData[count] = Connect.temp.businesses[count].employee;
					//businessData[count] = Connect.temp.businesses[count].manager;
					//businessData[count] = Connect.temp.businesses[count].inventory;
					//businessData[count] = Connect.temp.businesses[count].expenses;
			}
		}
	})

	app.post('/addBusiness', function(req, res){
		console.log("Add Business Route: ");
		console.log("    Business Name: " + req.body.businessName);
		console.log("    Phone Abrv: " + req.body.phoneAbrv);
	})
	
  };

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}