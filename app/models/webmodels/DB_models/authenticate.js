const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(user){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		dbo.collection(con.coll).findOne({username:user}, function(err, res) {
			 if (err) 
			 {
				 throw err
			 }
			// if(res){
				// throw done(null, false, req.flash('signupMessage', 'That email already taken'));
			// }
			// else
				con.temp = res;
			console.log(con.temp)
		console.log("User Authenticated");
			db.close();
            
		});

	});

};