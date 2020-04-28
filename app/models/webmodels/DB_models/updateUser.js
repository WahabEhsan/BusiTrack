const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash, fieldName, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		if (fieldName == 'businesses') {
			db.close();
		} else{
		
			var dbo = db.db(con.database);
		
			var query = {id: hash};
		
			var value = {$set: {[fieldName]: input}};
		
			var dateTime = {$currentDate: { lastModified: true }};

			dbo.collection(con.coll).updateOne(query, value, dateTime, function(err, res) {
				if (err) throw err;
				console.log("User updated");
				db.close();       
			});
		}

	});

};

