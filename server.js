var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//var path = require('path');
var cors = require('cors');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url,{useNewUrlParser:true,useUnifiedTopology:true});
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
//app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//app.use(flash()); // use connect-flash for flash messages stored in session
app.set('view engine', 'ejs');

require('./app/routes.js')(app, passport);




app.listen(port);
console.log('Server running on port: ' + port);
