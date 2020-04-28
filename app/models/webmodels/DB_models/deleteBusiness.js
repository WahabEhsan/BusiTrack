const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(user, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {username: user};
		
		var value = {$pull: {businesses: {businessName: input}}};
		
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).updateOne(query, value, function(err, res) {
			if (err) throw err;
			console.log("Business Deleted");
			db.close();
            
		});

	});

};


