const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(user, hash, email){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var myobj = {
			username: user,
            id: hash,
            email: email,
            phone: "",
			lastMsg: "",
            businesses: []
		};
		
		dbo.collection(con.coll).insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("User Created");
			db.close();
            
		});

	});

};
