const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {id: hash, "businesses.businessName": input[con.zero]};
				
		var value = {$pull: {"businesses.$.manager": {ssn: input[con.one]}}};
		
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).updateOne(query, value, dateTime, function(err, res) {
			if (err) throw err;
			console.log("Manager Deleted");
			db.close();
            
		});

	});

};

