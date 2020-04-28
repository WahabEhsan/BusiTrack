const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash, business, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {id: hash, "businesses.businessName": business};

		var newMan = {
			ssn: input[con.zero],
			fName: input[con.one],
			lName: input[con.two],
			group: input[con.three]
			};
	
		var newValue = {$push: {"businesses.$.manager": newMan}};
	
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).updateOne(query, newValue, dateTime, function(err, res) {
			if (err) throw err;
			console.log("Manager Added");
			db.close();
            
		});

	});

};

