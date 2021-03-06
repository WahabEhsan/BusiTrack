var User = require('./models/user.js');
var cors = require('cors');
var express = require('express');
var app = express();
var MongoGetBusiness = require("./models/webmodels/DB_models/getBusinesses.js");
var Connect = require("./models/webmodels/DB_models/connect.js");
var Create = require("./models/webmodels/DB_models/createBusiness.js");
var Delete = require("./models/webmodels/DB_models/deleteBusiness.js");
var getUser = require("./models/webmodels/DB_models/getUser.js");
var bodyParser = require('body-parser');

var createEmployee = require("./models/webmodels/DB_models/addEmp.js");
var createManager = require("./models/webmodels/DB_models/addMan.js");
var createInventory = require("./models/webmodels/DB_models/addInv.js");

var removeEmployee = require("./models/webmodels/DB_models/deleteEmp.js");
var removeManager = require("./models/webmodels/DB_models/deleteMan.js");
var removeInventory = require("./models/webmodels/DB_models/deleteInv");


module.exports = function(app, passport){
	
	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	/*login sequence will take the data sent to it and run it thrrough passport
	if passport returns true then they are logged in and the user data
	for that person is sent
	need to work on this some more to ensure that the mongoose schema is correct*/
	 app.post('/login', function (req, res, next) {
			
			 //console.log(req)
			 next()
		 },
		 passport.authenticate('local-login'),
		 (req, res) => {
			 //console.log('logged in', req.user);
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
        //console.log('Fetch business route: ' + Connect.temp.businesses);
        res.send(Connect.temp.businesses);
        
	})
	
	app.get('/user/:business', function(req, res){
		//console.log('req.params data: ' + req.params.business);
		//console.log('Whatever is in connect.temp: ' + Connect.temp.businesses);

		for (var count = 0; count < Connect.temp.businesses.length; count++) {
			if (req.params.business == Connect.temp.businesses[count].businessName) {
				//console.log('Business sent: ' + Connect.temp.businesses[count]);
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
		var username = Connect.temp.username
		//console.log("Add Business Route: ");
		//console.log("    Business Name: " + req.body.businessName);
		//console.log("    Phone Abrv: " + req.body.phoneAbrv);
		//console.log("    Username: " + Connect.temp.username);
		Create.main(Connect.temp.username, [req.body.businessName, req.body.phoneAbrv]);
		//console.log(Connect.temp)
		function test(){
			getUser.main(username);
		}
		setTimeout(test, 100)
	})

    app.post('/removeBusiness', function (req, res) {
    var username = Connect.temp.username
    //console.log("Remove Business Route: ");
    //console.log("    Business Name: " + req.body.businessName);
    //console.log("    Username: " + Connect.temp.username);
    Delete.main(Connect.temp.username, req.body.businessName);
    //console.log(Connect.temp)
    function test() {
        getUser.main(username);
    }
    setTimeout(test, 3000)
    })

    app.post('/addEmployee', function (req, res) {
        var username = Connect.temp.username
        console.log("    Business Name: " + req.body.theBusinessName);

        console.log("    Username: " + req.body.username);
        console.log("Req Body: " + req.body);
        createEmployee.main(Connect.temp.username, req.body.theBusinessName, [
            req.body.ssn,
            req.body.fname,
            req.body.lname,
            req.body.contact,
            req.body.address,
            req.body.pay,
            req.body.group,
        ]);
        //console.log(Connect.temp)
        function test() {
            getUser.main(username);
        }
        setTimeout(test, 100)
    })

    app.post('/removeEmployee', function (req, res) {
        var username = Connect.temp.username
        //console.log("Remove Business Route: ");
        //console.log("    Business Name: " + req.body.businessName);
        //console.log("    Username: " + Connect.temp.username);
        removeEmployee.main(Connect.temp.username, [req.body.theBusinessName, req.body.ssn]);
        //console.log(Connect.temp)
        function test() {
            getUser.main(username);
        }
        setTimeout(test, 100)
    })

    app.post('/addManager', function (req, res) {
        var username = Connect.temp.username
        //console.log("Remove Business Route: ");
        //console.log("    Business Name: " + req.body.businessName);
        //console.log("    Username: " + Connect.temp.username);
        createManager.main(Connect.temp.username, req.body.theBusinessName, [
            req.body.ssn,
            req.body.fname,
            req.body.lname,
            req.body.group
            ]);
        //console.log(Connect.temp)
        function test() {
            getUser.main(username);
        }
        setTimeout(test, 100)
    })

    app.post('/removeManager', function (req, res) {
        var username = Connect.temp.username
        //console.log("Remove Business Route: ");
        //console.log("    Business Name: " + req.body.businessName);
        //console.log("    Username: " + Connect.temp.username);
        removeManager.main(Connect.temp.username, [req.body.theBusinessName, req.body.ssn]);
        //console.log(Connect.temp)
        function test() {
            getUser.main(username);
        }
        setTimeout(test, 100)
    })

    app.post('/addInventory', function (req, res) {
        var username = Connect.temp.username
        //console.log("Remove Business Route: ");
        //console.log("    Business Name: " + req.body.businessName);
        //console.log("    Username: " + Connect.temp.username);
        createInventory.main(Connect.temp.username, req.body.theBusinessName, [
            req.body.itemNumber,
            req.body.itemName,
            req.body.itemPrice,
            req.body.stock
            ]);
        //console.log(Connect.temp)
        function test() {
            getUser.main(username);
        }
        setTimeout(test, 100)
    })

    app.post('/removeInventory', function (req, res) {
        var username = Connect.temp.username
        //console.log("Remove Business Route: ");
        //console.log("    Business Name: " + req.body.businessName);
        //console.log("    Username: " + Connect.temp.username);
        removeInventory.main(Connect.temp.username, [req.body.theBusinessName, req.body.itemNumber]);
        //console.log(Connect.temp)
        function test() {
            getUser.main(username);
        }
        setTimeout(test, 100)
    })

	};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}