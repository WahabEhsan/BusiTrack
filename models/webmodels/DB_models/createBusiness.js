const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {id: hash};

		var newBusiness = {businessName: input, employee: [], manager: [], inventory: [], expenses: []};
	
		var newValue = {$push: {businesses: newBusiness}};
	
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).updateOne(query, newValue, dateTime, function(err, res) {
			if (err) throw err;
			console.log("Business Created");
			db.close();
            
		});

	});

};

